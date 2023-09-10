const time = (readTime) => {
    const emoji = readTime > 30? "☕️":"🍱"
    const numEmojis  = Math.ceil(readTime / 10);
    return emoji.repeat(numEmojis);
  }


export default function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  const icon = time(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} {minutes}{icon}</small>
      <p>{preview}</p>
    </article>
  );
}
