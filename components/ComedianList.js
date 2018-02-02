import {Link} from '../routes'

export default ({ comedians}) => (
  <ul>
    {
      comedians.map((comedian, i) => {
        return <li key={comedian.id} className="comedianListItem">
        <Link route='comedian' params={{id: comedian.id}}>
          <a>
            {comedian.name}
          </a>
        </Link>
        </li>
      })
    }
  </ul>
)
