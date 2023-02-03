import { Fragment } from "react"

const ChecklistMilestone = (percentages: string) => {
  return (
    <Fragment>
      <div className={`w-[${percentages}%] h-2 rounded-full bg-gray-300`} />
    </Fragment>
  )
}

export default ChecklistMilestone