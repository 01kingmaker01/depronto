function useSubmit(fn) {
  return (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    console.log({ data, values });
    return fn(values);
  };
}
// const handleSubmit = useSubmit((values) => {
//     console.log("submitting", values);
//   });

export default useSubmit;
