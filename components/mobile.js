import ActiveLink  from "./ActiveLink";
export default function Figma() {
    return (
     <div className="md:hidden" >
         <div className="justify-between bg-green-500">
            <div class="flex  list-style-none items-center " >
                <span class="span pl-5 pr-3.5 z-0 py-3.5 rounded-r-full">
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.4707" width="10.4111" height="10.3091" fill="#00B87C"/>
                <rect y="11.7817" width="10.4111" height="10.3091" fill="#FEA162"/>
                <rect x="15.3682" y="4.90918" width="10.4111" height="10.3091" fill="#1A61DB"/>
                <rect x="11.8975" y="16.6909" width="10.4111" height="10.3091" fill="#DC1AA3"/>
                </svg></span>
                <span className="font-bold text-white">ZURI</span>
            </div>
            <div></div>
          </div>

          <div className="flex pl-5 pr-3.5 z-0 py-3.5 bg-green-100">
            <span className="mr-8 mt-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25244 8.99976H15.7524" stroke="#008B5E" stroke-width="2.04487" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.25244 4.5H15.7524" stroke="#008B5E" stroke-width="2.04487" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.25244 13.5002H15.7524" stroke="#008B5E" stroke-width="2.04487" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
            <span className="mr-3 mt-1">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.75H15" stroke="green" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 11.25H15" stroke="green" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.49999 2.25L6 15.75" stroke="green" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2.25L10.5 15.75" stroke="green" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span className="text-green-500">
              To-do-List
            </span>
            <span className="ml-2 mt-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.42857 6L9 9.75L12.5714 6L14 6.75L9 12L4 6.75L5.42857 6Z" fill="green"/>
                </svg>
            </span> 
            
          </div>

          <div className="flex  pl-5 pr-3.5 z-0 py-3.5 "> 
            <div className="mb-10 flex flex-wrap">
            <ActiveLink href="/" aria-current="page" className="h-text list-style-none mr-5 ">Pending</ActiveLink>
                <ActiveLink href="/login" className="h-text list-style-none mr-5">Archive</ActiveLink>
                <ActiveLink href="/" className="h-text hidden sm:inline-block list-style-none">Trash</ActiveLink>
            </div>
          </div>

          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-full w-full space-y-8">
                <div className=" flex items-center justify-center text-center">
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.36165 31.3333C9.36165 30.8029 9.57237 30.2942 9.94744 29.9191C10.3225 29.544 10.8312 29.3333 11.3617 29.3333H20.695C21.2254 29.3333 21.7341 29.544 22.1092 29.9191C22.4843 30.2942 22.695 30.8029 22.695 31.3333C22.695 31.8638 22.4843 32.3725 22.1092 32.7475C21.7341 33.1226 21.2254 33.3333 20.695 33.3333H11.3617C10.8312 33.3333 10.3225 33.1226 9.94744 32.7475C9.57237 32.3725 9.36165 31.8638 9.36165 31.3333ZM11.3617 14.6667C10.8312 14.6667 10.3225 14.8774 9.94744 15.2525C9.57237 15.6275 9.36165 16.1362 9.36165 16.6667C9.36165 17.1971 9.57237 17.7058 9.94744 18.0809C10.3225 18.456 10.8312 18.6667 11.3617 18.6667H20.695C21.2254 18.6667 21.7341 18.456 22.1092 18.0809C22.4843 17.7058 22.695 17.1971 22.695 16.6667C22.695 16.1362 22.4843 15.6275 22.1092 15.2525C21.7341 14.8774 21.2254 14.6667 20.695 14.6667H11.3617ZM39.4417 12.5867C39.8162 12.9617 40.0266 13.47 40.0266 14C40.0266 14.53 39.8162 15.0383 39.4417 15.4133L34.1083 20.7467C33.7333 21.1212 33.225 21.3316 32.695 21.3316C32.165 21.3316 31.6567 21.1212 31.2817 20.7467L28.615 18.08C28.2617 17.7009 28.0694 17.1994 28.0785 16.6813C28.0877 16.1631 28.2976 15.6688 28.664 15.3023C29.0304 14.9359 29.5248 14.726 30.0429 14.7169C30.5611 14.7077 31.0625 14.9001 31.4417 15.2533L32.695 16.5067L36.615 12.5867C36.99 12.2121 37.4983 12.0018 38.0283 12.0018C38.5583 12.0018 39.0667 12.2121 39.4417 12.5867ZM39.4417 30.08C39.6382 29.8969 39.7958 29.6761 39.9051 29.4308C40.0144 29.1854 40.0732 28.9206 40.0779 28.6521C40.0826 28.3835 40.0332 28.1168 39.9326 27.8677C39.8321 27.6187 39.6823 27.3925 39.4924 27.2026C39.3025 27.0126 39.0763 26.8629 38.8272 26.7623C38.5782 26.6617 38.3115 26.6123 38.0429 26.6171C37.7744 26.6218 37.5095 26.6806 37.2642 26.7899C37.0189 26.8992 36.7981 27.0568 36.615 27.2533L32.695 31.1733L31.4417 29.92C31.2586 29.7235 31.0378 29.5659 30.7924 29.4566C30.5471 29.3473 30.2823 29.2885 30.0137 29.2838C29.7452 29.279 29.4784 29.3284 29.2294 29.429C28.9804 29.5296 28.7541 29.6793 28.5642 29.8692C28.3743 30.0591 28.2246 30.2854 28.124 30.5344C28.0234 30.7834 27.974 31.0502 27.9787 31.3187C27.9835 31.5873 28.0423 31.8521 28.1516 32.0974C28.2609 32.3428 28.4185 32.5636 28.615 32.7467L31.2817 35.4133C31.6567 35.7879 32.165 35.9982 32.695 35.9982C33.225 35.9982 33.7333 35.7879 34.1083 35.4133L39.4417 30.08ZM6.02832 0C4.43702 0 2.9109 0.632141 1.78568 1.75736C0.660461 2.88258 0.0283203 4.4087 0.0283203 6V42C0.0283203 43.5913 0.660461 45.1174 1.78568 46.2426C2.9109 47.3679 4.43702 48 6.02832 48H42.0283C43.6196 48 45.1457 47.3679 46.271 46.2426C47.3962 45.1174 48.0283 43.5913 48.0283 42V6C48.0283 4.4087 47.3962 2.88258 46.271 1.75736C45.1457 0.632141 43.6196 0 42.0283 0H6.02832ZM4.02832 6C4.02832 5.46957 4.23903 4.96086 4.61411 4.58579C4.98918 4.21071 5.49789 4 6.02832 4H42.0283C42.5588 4 43.0675 4.21071 43.4425 4.58579C43.8176 4.96086 44.0283 5.46957 44.0283 6V42C44.0283 42.5304 43.8176 43.0391 43.4425 43.4142C43.0675 43.7893 42.5588 44 42.0283 44H6.02832C5.49789 44 4.98918 43.7893 4.61411 43.4142C4.23903 43.0391 4.02832 42.5304 4.02832 42V6Z" fill="#454545"/>
                    </svg>
                </div>
                <div  className=" items-center justify-center text-center text-sm">
               <div> You have no To-dos yet. Click on the bottom below  </div>
               <div> to add your first one.To-do list created will appear here</div>
            </div>
                <div className="px-4 py-3  text-center sm:px-6">
                <button
                type="submit" className="inline-flex justify-center py-2 px-4 border border-green-300 shadow-sm text-sm font-medium text-green-300 hover:bg-green-500 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 4.05811V14.5581" stroke="#00B87C" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.25 9.30811H14.75" stroke="#00B87C" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               <span className="pl-3"> Create a new to do</span>
            </button>
                </div>
            </div>
        </div>
        <footer className="footer">
            <hr></hr>
            <div className="justify-between flex  pl-2 pr-3.5 z-0 py-3.5">
            <div>
                <span className="flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.99988L12 1.99988L21 8.99988V19.9999C21 21.1044 20.1046 21.9999 19 21.9999H5C3.89543 21.9999 3 21.1044 3 19.9999V8.99988Z" stroke="#00B87C" stroke-width="1.56648" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 21.9999V11.9999H15V21.9999" stroke="#00B87C" stroke-width="1.56648" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </span>
                <span>Home</span>
            </div>

            <div>
                <span className="flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.4999C21.0034 12.8198 20.6951 14.1218 20.1 15.2999C18.661 18.1792 15.7189 19.9987 12.5 19.9999C11.1801 20.0033 9.87811 19.695 8.7 19.0999L3 20.9999L4.9 15.2999C4.30493 14.1218 3.99656 12.8198 4 11.4999C4.00125 8.281 5.82067 5.33895 8.7 3.89991C9.87811 3.30484 11.1801 2.99647 12.5 2.99991H13C17.3158 3.23801 20.7619 6.6841 21 10.9999V11.4999V11.4999Z" stroke="#7B8794" stroke-width="1.56648" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> </span>
                <span>DMs</span>

            </div>
                <div>
                <span className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20.9999V18.9999C20 16.7907 18.2091 14.9999 16 14.9999H8C5.79086 14.9999 4 16.7907 4 18.9999V20.9999" stroke="#7B8794" stroke-width="1.56648" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.9999C14.2091 10.9999 16 9.20902 16 6.99988C16 4.79074 14.2091 2.99988 12 2.99988C9.79086 2.99988 8 4.79074 8 6.99988C8 9.20902 9.79086 10.9999 12 10.9999Z" stroke="#7B8794" stroke-width="1.56648" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></span>
                    <span>You</span>
                </div>
 

            </div>
        </footer >
        <div className="help-widget addicon">
            <span className="svgcontainer">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4.5249V17.1249" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.69971 10.8247H17.2997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </span>

        </div>

     </div>
    )
  }