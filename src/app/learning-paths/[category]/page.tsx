import HeroSlider from '@/components/Slider/HeroSlider'
import { getAllPostsData, getCategoryBySlug, getPostData, getSubCategories } from '@/lib/posts'
import Link from 'next/link'
import { Metadata } from 'next'
import Article from '@/pages/Tutorials/Article'
import BreadCrumbs from '@/components/Breadcrumbs/BreadCrumbs'

interface PostPageProps {
    params: {
        category: string[]
    }
}

// export async function generateStaticParams() {
//     const posts = getAllPostsData()
//     return posts.map((post) => ({
//         slug: post.filePath.replace('.md', '').split('/'),
//     }))
// }

// export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
//     const id = params.category
//     const postData = await getPostData(id)

//     if (!postData) {
//         return {}
//     }

//     return {
//         title: `${decodeURIComponent(postData.title || "")} - Movement Network`,
//         description: postData.description || '',
//     }
// }

export default async function LearningPathLandingPage({ params }: PostPageProps) {
    const { category: pageSlug } = params

    if (!pageSlug) {
        return
    }

    const pageCategory = getCategoryBySlug('learning-paths', pageSlug.toString())
    const categories = getSubCategories('learning-paths', pageSlug.toString())

    return (
        <div id="learning-paths-inner-wrap" className="subpage-wrap">
            <div className="contain">
                <BreadCrumbs contain={false}>
                    <Link href="/learning-paths">Learning Paths</Link>
                </BreadCrumbs>

                <div className="page-intro">
                    <span className="subtitle body-12">6 Tutorials | 2 Demos | 3 Tools</span>
                    <h1 className="title">{pageCategory?.name}</h1>
                    <p className="body-24">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link href={`/${pageCategory?.link}/${categories[0].link}`} className="btn">
                        Start
                    </Link>
                </div>

                <div className="grid grid-4-column path-types-grid">
                    {categories.map((category, index) => {
                        return (
                            <Link 
                            href={`/${pageCategory?.link}/${category.link}`}
                            prefetch={false} className="card card-type-4" key={index}>
                                <span className="inner">
                                    <picture>
                                        <img src="/assets/images/icon-bg-transparent.png" alt="" />
                                    </picture>
                                    <span className="title body-24">{category.name}</span>
                                    <span className="btn">Start</span>
                                </span>
                                <span className="brief">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}