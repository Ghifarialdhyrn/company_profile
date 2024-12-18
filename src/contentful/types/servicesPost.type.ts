import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeCompanyProfileFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
}

export interface IContentfulAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeCompanyProfileSkeleton = EntrySkeletonType<
  TypeCompanyProfileFields,
  "companyProfile"
>;
export type TypeCompanyProfile<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeCompanyProfileSkeleton, Modifiers, Locales>;
