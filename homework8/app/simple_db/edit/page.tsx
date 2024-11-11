import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export default function editPage({ searchParams }: 
    { searchParams: { id: string, brand: string, name: string, price: number } }) {
    const { id, brand, name, price } = searchParams;


    async function updateModel(formData : FormData) {
        "use server"
        const brand = formData.get("brand") as string;
        const name = formData.get("name") as string;

        const priceString = formData.get("price") as string;
        const price = priceString? parseFloat(priceString): null;


        if(price === null || isNaN(price)){
            throw new Error("Price is required and must be a valid number.");
        }


        await prisma.guitar.update({data:{brand,name,price}, where:{id}})
        redirect("/simple_db");
    }

    return (
        <div className="bg-gray-100">
          
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
              <p className="font-bold max-w-xl text-lg">
                  Update {brand}/{name}/{price} 
                </p>
                <p className="max-w-xl text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, quia ipsam culpa pariatur cum repellendus, ipsum commodi consectetur soluta iste reiciendis dolore voluptate fugit totam, quod error doloribus architecto.
                </p>
              </div>

              <div className=" rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action={updateModel} className="space-y-4">
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      name="name"
                      type="text"
                    />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="Brand"
                        name="brand"
                        type="text"
                      />
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="Price"
                        name="price"
                        type="number"
                      />
                  </div>

                  <div className="flex justify-end mt-4 ">
                    <button className="inline-block w-full rounded-lg bg-[#775b45] px-5 py-3 font-medium text-white sm:w-auto">update</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>)
}