interface Props {
    subtitle: string;
}

export const MySubTitle = ({subtitle}: Props) => {
  return (
    <>
      <h6>{subtitle}</h6>

      <button>Lamar a función</button>
    </>
  )
}
