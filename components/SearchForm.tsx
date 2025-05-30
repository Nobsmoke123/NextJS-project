import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "@/components/SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" className="search-form" scroll={false}>
      <input
        type="text"
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {" "}
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
