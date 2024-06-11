import Base from '@/Components/Base/Base';
import { fetchData } from '../Data/fetchData';

export default async function HomePage() {
  const initialData = await fetchData()
  return <Base initialData={initialData} />;
}
