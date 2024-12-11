import { documentToReactComponents, } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

export const BlogPostText: React.FC<{ richText: Document }> = ({ richText }) => {
    return <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        {documentToReactComponents(richText)}
    </div>
}