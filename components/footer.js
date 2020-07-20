export default function Footer() {
  return (
    <footer>
      <p>Fresh nest Organizing LLC</p>
      <p>Services residential / business unpack setup</p>
      <a href={`mailto:Feshnestorganizing@gmail.com`}>Feshnestorganizing@gmail.com </a>
      <p>203-822-2197 </p>
      <p>137 Hollow Tree Ridge Road</p>
      <p>Darien, CT 06820</p>
      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: var(--gap-double);
          }
        `}
      </style>
    </footer>
  )
}
