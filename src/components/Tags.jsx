import { Link, useSearchParams } from 'react-router-dom';

export default function Tag({tagsList}) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return tagsList.map((tag, i) => {
    const tagClass = i === 0 ? 'first-tag' : '';
    return (
      <span key={tag} className={tagClass} onClick={() => setSearchParams('tag', tag)}>{tag}</span>
    )
  })
}