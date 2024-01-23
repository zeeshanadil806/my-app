import Counter from "@/components/Counter";
import DisplayData from "@/components/DisplayData";
import DisplayData1 from "@/components/DisplayData1";
import ItemsList from "@/components/ItemsList";
import TextColorChanger from "@/components/TextColorChanger";
export default function Home() {
  return (
    <main>
      <Counter/>
      <DisplayData/>
      <DisplayData1/>
      <ItemsList/>
      <TextColorChanger/>
    </main>
  );
}
