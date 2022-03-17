interface AppProps {
  headerText: string;
  extraText?: string;
}

export default function App({ headerText, extraText = 'default Text' }: AppProps) {
  return (
    <>
   <h1>{headerText}</h1>
   {extraText && <p>{extraText}</p>}
   </>
  );
}