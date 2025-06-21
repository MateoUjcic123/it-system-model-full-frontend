import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './jsonfiletable.module.scss'

interface FileItem {
  name: string
  size: string
  date: string
  timestamp: number
}

export default function JsonFileTable() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate() 

  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const file = e.target.files?.[0]
    // if (file) {
    //   const now = new Date()
    //   const newFile: FileItem = {
    //     name: file.name,
    //     size: `${Math.round(file.size / 1024)} KB`,
    //     date: now.toLocaleDateString('hr-HR'),
    //     timestamp: now.getTime()
    //   }
    //   setFiles((prev) => [...prev, newFile])
    // }

    const selectedFiles = e.target.files
    if (selectedFiles) {
      const now = new Date()
      const newFiles: FileItem[] = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        size: `${Math.ceil(file.size / 1024)} KB`,// zaokruzuje na vise bolje nego da ima mogucnost da zaokruzuje na nize?
        date: now.toLocaleDateString('hr-HR'),
        timestamp: now.getTime()
      }))

  setFiles((prev) => [...prev, ...newFiles])
}

    e.target.value = '' // resetira last value da ako obrišemo file možemo ga ponovno dodat na listu bez da prvo moramo uploadat neki drugi file.
  }

  const handleDownload = (type: 'original' | 'modified', file: FileItem) => {
    console.log(`Downloading ${type} version of ${file.name}`)
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
            <th>File name</th>
            <th>File size</th>
            <th>Upload date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
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
