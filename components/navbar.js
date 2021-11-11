/* This example requires Tailwind CSS v2.0+ */
import ActiveLink  from "./ActiveLink";

export default function Example() {
  return (
        <div className="">
          <div className="pl-5 pr-3.5 z-0 py-3">
               <span>
               <label htmlFor="text" className="sr-only">
                  Search here
                </label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-3/5  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Search here"
                />
               </span>
               <span>
                 
               </span>
               
          </div>
          <div className="bg-green-500  pl-5 pr-3.5 z-0 py-3.5 mt-2.5 flex">
            <span className="mr-3 mt-1">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.75H15" stroke="white" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 11.25H15" stroke="white" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.49999 2.25L6 15.75" stroke="white" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2.25L10.5 15.75" stroke="white" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span className="text-white">
              To-do-List
            </span>
            <span className="ml-2 mt-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.42857 6L9 9.75L12.5714 6L14 6.75L9 12L4 6.75L5.42857 6Z" fill="white"/>
                </svg>
            </span> 
          </div>


          <div className="flex flex-wrap justify-between pl-5 pr-3.5 z-0 py-3.5">
            <div className="flex flex-wrap "> 
                <ActiveLink href="/" aria-current="page" className="h-text list-style-none mr-5 ">Pending</ActiveLink>
                <ActiveLink href="/login" className="h-text list-style-none mr-5">Archive</ActiveLink>
                <ActiveLink href="/" className="h-text hidden sm:inline-block list-style-none">Trash</ActiveLink></div>
              <div className="flex justify-end">
              <button type="submit" className="inline-flex py-2 px-4 border border-transparent shadow-sm text-sm font-medium r text-white bg-green-500 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                  Create a new to-do
              </button></div>
          </div>


          </div>
  )
}
