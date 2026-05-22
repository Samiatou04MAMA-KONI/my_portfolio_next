import styles from './page.module.css'
import formations from '@/data/formation'
import Image from 'next/image'
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { form } = await params
    const formation = formations.find((formation) => formation.form === form)
    if (!formation) {
        return {
            title: 'Formation Not Found - My Portfolio',
            description: 'The formation you are looking for does not exist.',
            openGraph: {
                title: 'Formation Not Found - My Portfolio',
                description: 'The formation you are looking for does not exist.',
                images: [
                    {
                        url: '/images/not-found.jpg',
                    },
                ],
            },
        }
    }
    return {
        title: `${formation.title} - My Portfolio`,
        description: formation.description,
        openGraph: {
            title: `${formation.title} - My Portfolio`,
            description: formation.description,
            images: [
                {
                    url: formation.image,
                },
            ],
        },
    }
}

export default async function Detail({ params }) {
    const { form } = await params
  const formation = formations.find((formation) => formation.form === form);

  if (!formation) {
    return <div>
        <h1>Formation not found</h1>
        <p>This formation does not exist or has been deleted.</p>
    </div>;
  }

  return (
    <div className={styles.container}>
        <Link href="/formations" className={styles.backLink}>
            ← Back to Formations
        </Link>

        <div className={styles.header}>
            <h1 className={styles.title}>{formation.title}</h1>
            <p className={styles.description}>{formation.description}</p>
        </div>

        <div className={styles.content}>
            <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                    <Image 
                        src={formation.image} 
                        alt={formation.title}
                        className={styles.image}
                        width={500}
                        height={300}
                        preload={true}
                    />
                </div>
            </div>

            <div className={styles.details}>
                <p className={styles.cardDetail}><strong>Year :</strong> {formation.date}</p>
                <p className={styles.cardDetail}><strong>Durée :</strong> {formation.duration}</p>
                <p className={styles.cardDetail}><strong>Institution :</strong> {formation.institution}</p>
            </div>
        </div>
    </div>
  )
}

export function generateStaticParams() {
    return formations.map((formation) => ({
        form: formation.form,
    }))
}
