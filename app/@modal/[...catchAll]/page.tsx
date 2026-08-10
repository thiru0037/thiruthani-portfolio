// Safety net: renders nothing when a client-side navigation lands on any route
// other than "/" or an intercepted case study, so the modal never gets stuck open.
export default function ModalCatchAll() {
  return null;
}
