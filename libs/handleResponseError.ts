const UNEXPECTED_ERROR_MESSAGE = 'Unexpected error';

export default function(error) {
  try {
    const { data, status } = error.response;
    if (status === 422) {
      return alert(`${data.errors[0].param}: ${data.errors[0].msg}`);
    } else {
      return alert(data.message || UNEXPECTED_ERROR_MESSAGE);
    }
  } catch {
    return alert(UNEXPECTED_ERROR_MESSAGE);
  }
}
