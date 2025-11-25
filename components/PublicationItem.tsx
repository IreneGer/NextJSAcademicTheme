import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
    return (
        <div className="mt-4 mb-8">
            <p className="text-base text-gray-500">
                [{index}] {publication.author} <b><i>{publication.title}</i></b><br />
                <span className="text-sm">{publication.conference}</span>
            </p>
            <p className="text-gray-500 flex justify-end text-sm font-bold">
                {publication.links
                    .filter((linkItem: any) => linkItem.url && linkItem.url.trim() !== "")
                    .map((linkItem: any, idx: any) => (
                        <ExtLink href={linkItem.url} key={idx}>
                            [{linkItem.name}]&nbsp;
                        </ExtLink>
                    ))}
            </p>
        </div>
    );
};

export default PublicationItem;
