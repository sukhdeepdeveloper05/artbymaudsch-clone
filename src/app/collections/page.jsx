import CollectionsSection from "@/components/CollectionsSection/CollectionsSection";
import getCollections from "@/util/getCollections";

export default async function Collections() {
  const collections = await getCollections();

  return (
    <main>
      <CollectionsSection preFetchedCollections={collections} />
    </main>
  );
}
