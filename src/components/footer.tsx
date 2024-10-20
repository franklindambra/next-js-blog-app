import React from 'react'

const year = new Date().getFullYear();

export default function Footerooter() {
  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-7 border-t">
      <small>&copy; {year} All right reserved.</small>
    </footer>
  )
}
