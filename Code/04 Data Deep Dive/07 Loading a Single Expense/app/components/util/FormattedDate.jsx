function FormattedDate({date}) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return <time dateTime={new Date(date).toISOString()}>{formattedDate}</time>;
}

export default FormattedDate;
