import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './jsonfiletable.module.scss'

interface FileItem {
  name: string
  size: string
  date: string
  timestamp: number
  file: File
}

type SortField = 'name' | 'size' | 'date'
type SortDirection = 'asc' | 'desc'

export default function JsonFileTable() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate() 
  // sort
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');


  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles) {
      const now = new Date()
      const newFiles: FileItem[] = Array.from(selectedFiles)
      .filter(file => !files.some(existingFile => existingFile.name === file.name)) // filtira duplikate
      .map((file) => ({
        name: file.name,
        size: `${Math.ceil(file.size / 1024)} KB`,// zaokruzuje na vise bolje nego da ima mogucnost da zaokruzuje na nize?
        date: now.toLocaleDateString('hr-HR'),
        timestamp: now.getTime(),
        file, //apluda file
      }))

      if (newFiles.length < selectedFiles.length) {
      alert('Some files were skipped because they have duplicate names.')
      } 

  setFiles((prev) => [...prev, ...newFiles])
}

    e.target.value = '' // resetira last value da ako obrišemo file možemo ga ponovno dodat na listu bez da prvo moramo uploadat neki drugi file.
  }

  const handleSort = (field: SortField) => {
  if (sortField === field) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDirection('asc');
  }
};

const sortedFiles = [...files].sort((a, b) => {
  let comp = 0;

  if (sortField === 'name') {
    comp = a.name.localeCompare(b.name);
  } else if (sortField === 'date') {
    comp = a.timestamp - b.timestamp;
  } else if (sortField === 'size') {
    const aSize = parseInt(a.size);
    const bSize = parseInt(b.size);
    comp = aSize - bSize;
  }

  return sortDirection === 'asc' ? comp : -comp;
});

  const handleDownload = (type: 'original' | 'modified', fileItem: FileItem) => {
    console.log(`Downloading ${type} version of ${fileItem.name}`)
    // right now, just download originala
    const url = URL.createObjectURL(fileItem.file)
    const a = document.createElement('a')
    a.href = url
    a.download = fileItem.name
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)

    setOpenDropdownIndex(null)
  }


  const handleEdit = () => {
    navigate('/viewer') // Preusmjeri na Graphical Model Viewer
  }

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm("Are you sure you would like to delete this file?")
    if (confirmDelete) {
      setFiles((prev) => prev.filter((_, i) => i !== index))
    }
  }

const dropdownRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdownIndex(null)
    }
  }

  document.addEventListener('mousedown', handleClickOutside)
  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Upload JSON Files</h2>
        <button className={styles.addButton} onClick={handleAddClick}>+ ADD FILE</button>
        <input
          type="file"
          accept=".json"
          multiple // moze se addat vise fileova odjednom
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <span>File name</span>
              <button onClick={() => handleSort('name')}>
                {sortField === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : '⇅'}
              </button>
            </th>
            <th>
              <span>File size</span>
              <button onClick={() => handleSort('size')}>
                {sortField === 'size' ? (sortDirection === 'asc' ? '↑' : '↓') : '⇅'}
              </button>
            </th>
            <th>
              <span>Upload date</span>
              <button onClick={() => handleSort('date')}>
                {sortField === 'date' ? (sortDirection === 'asc' ? '↑' : '↓') : '⇅'}
              </button>
            </th>
            <th>Action</th>
          </tr>
        </thead>



        <tbody>
          {sortedFiles.map((file, index) => (
            <tr key={index}>
              <td className={styles.centered}>{file.name}</td>
              <td>{file.size}</td>
              <td>{file.date}</td>
              <td className={styles.actions}>
                <button title="View and edit file" onClick={handleEdit}>✏️</button>

                <div className={styles.dropdownWrapper} ref={dropdownRef}>
                  <button title="Download options"
                    onClick={() =>
                      setOpenDropdownIndex(openDropdownIndex === index ? null : index)
                    }
                  >
                    ⬇️
                  </button>

                  {openDropdownIndex === index && (
                    <div className={styles.dropdown}>
                      <button onClick={() => handleDownload('original', file)}>Download Original</button>
                      <button onClick={() => handleDownload('modified', file)}>Download Modified</button>
                    </div>
                  )}
                </div>

                <button title="Delete file" onClick={() => handleDelete(index)}>🗑️</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footer}>Total files: {files.length}</div>
    </div>
  )
}
