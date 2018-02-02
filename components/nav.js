import Link from 'next/link'

export default () => (
  <ul>
    <Item href="/comedians">comedians</Item>
    <Item href="/venues">venues</Item>
    <Item href="/shows">shows</Item>
    <Item href="/calendar">calendar</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
      }
    `}</style>
  </ul>
)

const Item = ({ href, children }) => (
  <li>
    <Link prefetch href={href}>
      <a>{ children }</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      a:hover {
        color: #fff;
      }
    `}</style>
  </li>
)
