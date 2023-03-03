import BoardHeader from "./BoardHeader"

const BoardLoading = () => {

  const LOADING_DATA = [{
    data: '',
  }, {
    data: ''
  }]

  return (
    <div className='relative flex flex-col px-2 sm:px-3 gap-4 sm:gap-3 min-h-screen max-w-screen'>
      <BoardHeader />
      <section className='flex flex-row items-start gap-4 overflow-x-auto flex-1 w-full snap-x animate-pulse'>
      {LOADING_DATA.map(({data}: any, i) => {
        return (
          <div key={i} className='relative flex flex-col flex-1 w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] h-24 xs:min-w-0 xs:w-[17rem] bg-gray-300 px-1.5 pb-2 rounded-sm text-sm text-gray-700'></div>
        )
      })}
    </section>
    </div>
    
  )
}

export default BoardLoading