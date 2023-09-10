import Article from "./Article"


export default function ArticleList({posts}) {
    const postList = posts.map(post=> <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />)

    return (
        <main>
            {postList}
        </main>
    )
}