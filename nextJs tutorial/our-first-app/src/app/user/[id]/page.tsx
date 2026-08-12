
interface PageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ name: string | undefined }>


}



export default async function UserInfo({ params, searchParams }: PageProps) {

    const { id } = await params
    const { name } = await searchParams
    console.log(name)
    return (
        <>

            <div> User {id} details</div>
            <div> User {name}</div>
        </>
    );
}