import { Select } from "matte-ui";

export default function Home() {
  return (
    <div>
      <Select
        id="1-2"
        items={[
          {
            value: 12,
            text: "1",
          },
          {
            value: 2,
            text: "2",
          },
        ]}
      />
      <Select
        id="2"
        value={1}
        items={[
          {
            value: 1,
            text: "1",
          },
          {
            value: 2,
            text: "2",
          },
        ]}
      />
    </div>
  );
}
