import { Link } from "gatsby"
import * as React from "react"
import useQueryCategories from "../hooks/use-query-categories"
import "../styles/index.scss"

const Layout = (props) => {
  const data = useQueryCategories()
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" className={!props.uidActive ? 'active' : ''}>Homepage</Link>
            </li>
            {
              data.allPrismicCategory.nodes?.map(category => (
                <li key={category.uid}>
                  <Link
                    to={'/category/' + category.uid}
                    className={category.uid === props.uidActive ? 'active' : ''}
                  >
                    {category.data.title.text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
      <main className="container">
        {props.children}
      </main>
    </>

  )
}

export default Layout
