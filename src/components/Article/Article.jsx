import './style.css';

export const Article = ({
  open,
  title,
  text,
  onOpen,
}) => {
  const titleClassName = `title padding ${open ? 'open' : ''}`;

  return (
    <>
      <div onClick={onOpen} className={titleClassName}>
        {title}
      </div>
      {open && (
        <div className="text">
          {text}
        </div>
      )}
    </>
  )
}
