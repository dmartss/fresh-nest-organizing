export default function Footer() {
  return (
    <footer>
      <div>
        <a href={`mailto:freshnestorganizing@gmail.com`}>freshnestorganizing@gmail.com</a>
        <p>203-822-2197</p>
      </div>
      <div>
        Copyright © {`${new Date().getFullYear()}`} Fresh Nest Organizing LLC, Inc. All rights
        reserved.
      </div>
      <div>
        <p>137 Hollow Tree Ridge Road</p>
        <p>Darien, CT 06820</p>
      </div>

      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            text-align: center;
            left: 0;
            bottom: 0;
            width: 100%;
            border-top: 1px solid var(--fg);
          }
        `}
      </style>
    </footer>
  )
}
