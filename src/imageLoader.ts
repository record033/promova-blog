

type LoaderProps = {
  src: string;
  width: string;
  quality: string
}

export default function contentfulLoader({ src, width, quality }: LoaderProps) {
  const url = new URL(`https:${src}`)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', (quality || 75).toString())
  return url.href
}