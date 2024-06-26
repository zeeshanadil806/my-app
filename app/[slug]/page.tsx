export default function Page({ params }: { params: { slug: string } }) {
    return <div>Currently You Are on {params.slug} Page</div>
  }