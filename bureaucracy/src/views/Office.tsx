import useOffice, { Offices } from '../hooks/useOffice'

const Office = ({ office }: { office: Offices }) => {
  const state = useOffice(office)
  console.log(state, Offices[office])
  return <code>{JSON.stringify(state)}</code>
}

export default Office
