import { revalidatePath } from 'next/cache'
import prisma from '../../utils/db'
import TodoItem from '@/components/TodoItem'


export default async function Todo() {


// // Create
//  const title = "My Test title "
//  await prisma.todo.create({ data: { title, done: false } })

const data = await prisma.todo.findMany();
console.log(data);

// // Read
//  const firstRow = await prisma.todo.findFirst()
//  console.log("data: ", firstRow)



//  // Update
//  // await prisma.todo.update({ where: { id: data.id }, data: { title:"New title", done: true } })


//  // Delete
//  // await prisma.todo.delete({ where: { id: data.id }} )


//  const data = await prisma.todo.findMany()
//  console.log("data: ", data)


//  async function addTask(formData: FormData) {
//    "use server"
//    console.log("Input: ", formData.get("title"))
//    const title = formData.get("title") as string
//    await prisma.todo.create({ data: { title, done: true } })
//    revalidatePath("/")
//  }


//  async function deleteTask(id: string) {
//    "use server"
//    await prisma.todo.delete({ where: { id } })
//    revalidatePath("/")
//  }


//  async function toggleTask(id: string, done: boolean) {
//    "use server"
//    console.log(id, done)
//    await prisma.todo.update({ where: { id }, data: { done } })
//    // revalidatePath("/")
//  }


 return (
   <div>
     <h1>Simple DB</h1>
      <div>
         {data.map((item)=>(
            <div key={item.id}>{item.title}  : {item.done?"yes":"no"}</div>
         ))}
      </div>
      
   {/*

     <div>
       {data.map((item, index) => (
         <TodoItem key={index}
           index={index} id={item.id} title={item.title} done={item.done}
           deleteTask={deleteTask}
           toggleTask={toggleTask}
         />
       ))
       }
     </div> */}


     {/* <div>
       <form action={addTask}>
         <input
           className='border-2 border-black'
           type="text" name="title" />
         <button type="submit">Add</button>
       </form>
     </div> */}
   </div>
 );
}

