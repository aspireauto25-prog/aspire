import { FaFileShield, FaUserGroup } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";

import {
  COMMUNITY_GUIDELINES,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
} from "@/constants/legalDocuments";
import { getLegalDocumentByType } from "@/api/legalDocuments";
import TextEditor from "@/components/admin/legal-documents/TextEditor";

const tabs = [
  {
    Icon: FaFileShield,
    key: TERMS_AND_CONDITIONS,
    label: "Terms and conditions",
  },
  {
    Icon: MdPrivacyTip,
    key: PRIVACY_POLICY,
    label: "Privacy Policy",
  },
  {
    Icon: FaUserGroup,
    key: COMMUNITY_GUIDELINES,
    label: "Community Guidelines",
  },
];

interface Props {
  searchParams: Promise<SearchParams>;
}

const LegalDocumentsPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const type = (query?.type as string) ?? TERMS_AND_CONDITIONS;

  const legalDocument = await getLegalDocumentByType(type);

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-1">
          {tabs.map(({ Icon, key, label }) => (
            <Link
              key={key}
              href={`?type=${key}`}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all ${key == type ? "border-b-2 border-primary text-primary" : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"}`}
            >
              <Icon />
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="py-8">
        <TextEditor type={type} initialValue={legalDocument?.content ?? ""} />
      </div>
    </>
  );
};

export default LegalDocumentsPage;
