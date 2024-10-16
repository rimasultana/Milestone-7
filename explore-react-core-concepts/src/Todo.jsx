/* export default function Todo ({task, isDOne}){
    return(
        <li>List{task}</li>
    )
} */
/*     export default function Todo ({ task, isDone }) {
        if (isDone === true) {
          return <li>Finished: {task}</li>;
        } else {
          return <li>Work on: {task}</li>;
        }
      }
       */

//   conditional rendering option-2

export default function Todo({ task, isDone }) {
  if (isDone) {
    return <li>Finish: {task}</li>;
  }
  return <li>Work on: {task}</li>;
}
