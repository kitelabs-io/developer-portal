import Scroller from '@/components/Marquee/Scroller'
import HeroSlider from '@/components/Slider/HeroSlider'
import useLearningPaths from '@/hooks/useLearningPaths'
import { getSubCategories } from '@/lib/posts'
import { PostData } from '@/types/posts'
import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import useDeveloperTools from '@/hooks/useDeveloperTools'
import ToolsCard from '@/components/Cards/Tools'
import LearningPathCard from '@/components/Cards/LearningPath'
import lottiebkg from '../../../public/json/home-circles.json'

export default function Home(props: { postData: PostData[] }) {
    const allPostsData = props.postData
    const categories = getSubCategories('learning-paths')
    const LearningPathsData = useLearningPaths()
    const DeveloperToolsData = useDeveloperTools()
    return (
        <div className="md:mt-40">
            <HeroSlider>
                <div className="slide has-video">
                    <div className="col-lt">
                        <picture>
                            <button className="play">
                                <svg
                                    width="38"
                                    height="44"
                                    viewBox="0 0 38 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M37.6506 22.0001L0.114485 43.9951L0.114487 0.00516918L37.6506 22.0001Z"
                                        fill=""
                                    />
                                </svg>
                            </button>
                        </picture>
                    </div>
                    <div className="col-rt">
                        <div className="inner">
                            <h1 className="title">Meet the Founders!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#" className="btn btn-yellow">
                                Guide
                            </a>
                            <a href="#" className="btn btn-yellow">
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </HeroSlider>

            <section className="contain learning-paths">
                <div className="section-head">
                    <h3>Movement Learning Paths</h3>
                    <Link href="/learning-paths" className="btn btn-12">
                        View All
                    </Link>
                </div>
                <div className="path-link">
                    <div className="video-bg">
                        <video autoPlay loop muted playsInline preload="meta">
                            <source type="video/mp4" src="/video/video-bg-1.mp4" />
                        </video>
                    </div>
                    <Link href="#" className="learning-content">
                        <h4>Jump in and start learning</h4>
                        <p>
                            A curated list of resources for developers in specific verticals to learn how to build on
                            movement
                        </p>
                        <span className="ul-link body-12">View All Paths</span>
                        <button className="play">
                            <svg
                                width="38"
                                height="44"
                                viewBox="0 0 38 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M37.6506 22.0001L0.114485 43.9951L0.114487 0.00516918L37.6506 22.0001Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>

            <section className="contain path-cards">
                <div className="grid grid-3-column">
                    {Object.keys(LearningPathsData).map((key) => (
                        <LearningPathCard cardKey={key} data={LearningPathsData[key]} key={key} />
                    ))}
                </div>
            </section>

            <section className="contain guides">
                <div className="section-head">
                    <h3>Guides and Tutorials</h3>
                    <Link href="/tutorials" className="btn btn-12">
                        View All
                    </Link>
                    <div className="slick-arrows section-arrows">
                        <a href="#" className="slick-arrow section-btn section-prev">
                            <svg
                                width="9"
                                height="12"
                                viewBox="0 0 9 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.86805e-07 6L9 0.803848L9 11.1962L7.86805e-07 6Z" fill="" />
                            </svg>
                        </a>
                        <a href="#" className="slick-arrow section-btn section-next">
                            <svg
                                width="9"
                                height="12"
                                viewBox="0 0 9 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 6L4.64275e-07 11.1962L9.18537e-07 0.803847L9 6Z" fill="" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-4-column guides-grid">
                    <a href="#" className="card card-type-play">
                        <span className="body-20">
                            Sharpen your skills and understand how to get the most out of Movement
                        </span>
                        <span className="play-wrap">
                            <button className="play">
                                <svg
                                    width="38"
                                    height="44"
                                    viewBox="0 0 38 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M37.6506 22.0001L0.114485 43.9951L0.114487 0.00516918L37.6506 22.0001Z"
                                        fill=""
                                    />
                                </svg>
                            </button>
                        </span>
                    </a>
                    <a href="#" className="card card-type-2">
                        <span className="meta">
                            <span>Advanced</span>
                            <span>25m</span>
                        </span>
                        <div className="card-content">
                            <span className="title">Title</span>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <picture>
                            <img src="/images/tech-stack.png" alt="" />
                            <span className="tags">
                                <span className="tag">Tag</span>
                                <span className="tag">Tag</span>
                            </span>
                        </picture>
                    </a>
                    <a href="#" className="card card-type-2">
                        <span className="meta">
                            <span>Advanced</span>
                            <span>25m</span>
                        </span>
                        <div className="card-content">
                            <span className="title">Title</span>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <picture>
                            <img src="/images/tech-stack.png" alt="" />
                            <span className="tags">
                                <span className="tag">Tag</span>
                                <span className="tag">Tag</span>
                            </span>
                        </picture>
                    </a>
                    <a href="#" className="card card-type-2">
                        <span className="meta">
                            <span>Advanced</span>
                            <span>25m</span>
                        </span>
                        <div className="card-content">
                            <span className="title">Title</span>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <picture>
                            <img src="/images/tech-stack.png" alt="" />
                            <span className="tags">
                                <span className="tag">Tag</span>
                                <span className="tag">Tag</span>
                            </span>
                        </picture>
                    </a>
                </div>
            </section>

            <section className="contain dev-tools">
                <div className="section-head">
                    <h3>Developer Tools</h3>
                    <Link href="/developer-tools" className="btn btn-12">
                        View All
                    </Link>
                    <div className="slick-arrows section-arrows">
                        <a href="#" className="slick-arrow section-btn section-prev">
                            <svg
                                width="9"
                                height="12"
                                viewBox="0 0 9 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.86805e-07 6L9 0.803848L9 11.1962L7.86805e-07 6Z" fill="" />
                            </svg>
                        </a>
                        <a href="#" className="slick-arrow section-btn section-next">
                            <svg
                                width="9"
                                height="12"
                                viewBox="0 0 9 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 6L4.64275e-07 11.1962L9.18537e-07 0.803847L9 6Z" fill="" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-4-column guides-grid">
                    <a href="#" className="card card-type-play">
                        <span className="body-20">
                            Sharpen your skills and understand how to get the most out of Movement
                        </span>
                        <span className="play-wrap">
                            <button className="play">
                                <svg
                                    width="38"
                                    height="44"
                                    viewBox="0 0 38 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M37.6506 22.0001L0.114485 43.9951L0.114487 0.00516918L37.6506 22.0001Z"
                                        fill=""
                                    />
                                </svg>
                            </button>
                        </span>
                    </a>

                    {Object.keys(DeveloperToolsData)
                        .slice(0, 10)
                        .map((key) => (
                            <ToolsCard key={key} data={DeveloperToolsData[key]} />
                        ))}
                </div>
            </section>
        </div>
    )
}
