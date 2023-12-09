
export default function BioCard({link, desc, name, role, bio, discord_uname, github, children}) { 
    return(
        <div className=" text-base-content bg-base-200 border-base-300 card lg:card-side shadow-xl m-5">
            <figure className=" w-fill h-fill">
                <picture>
                    <img className=""
                    src={link} 
                    alt={desc} 
                    />
                </picture>
            </figure>
            <div className="card-body">
                <div>
                    <h1 className="card-title">{name}</h1>
                    <h2 className="italic text-accent">{role}</h2>
                    <br/>
                    {children}
                </div>
                
                <div className="card-actions object-bottom justify-center mt-5">
                    <button className="btn btn-primary mx-2" id="discord_contact">{discord_uname}</button>
                    <button className="btn btn-primary mx-2" id="github_contact" href={github}>GitHub</button>
                </div>
            </div>
        </div>
    );
}
