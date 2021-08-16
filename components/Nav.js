const Nav = (props) => <>
  <p>This is a test</p>

  <style jsx>{`
    p {
      color: red;
    }

    @media (min-width: 400px) {
      p {
        color: blue;
      }
    }
  `}</style>
</>


export default Nav
