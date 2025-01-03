"use client"; 
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

export default function BookmarkButton() {
  const pathname= usePathname()
  const [bookmarks,setBookmarks] = useState([])
  const [isBookmarked,setIsBookmarked] = useState(false)

  useEffect(() =>{
    const foundBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    setBookmarks(foundBookmarks)
    if(foundBookmarks && foundBookmarks.includes(pathname)){
      setIsBookmarked(true)
    }
    else{
      setIsBookmarked(false)
    }
  },[])

  const handleClick = () =>{
    if(!isBookmarked){
      const newBookmarks = [...bookmarks, pathname]
      localStorage.setItem('bookmarks',JSON.stringify(newBookmarks))
      setBookmarks(newBookmarks);
      setIsBookmarked(true)
    }
    else{
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark!==pathname)
      localStorage.setItem('bookmarks',JSON.stringify(updatedBookmarks))
      setBookmarks(updatedBookmarks)
      setIsBookmarked(false)  
    }
  }

  return (
    <button onClick={handleClick}>
      {isBookmarked ? <MdBookmark size={40}/> : <MdBookmarkBorder size={40}/>}
    </button>
  );
}
