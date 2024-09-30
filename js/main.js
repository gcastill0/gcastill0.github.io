const projects = [
    {
        "id": "hcp-vault",
        "avatar": "img/s1_logo_dark.svg",
        "title": "Extrahop Data Store",
        "date": "Sep 2024",
        "description": "A series of programmatic options to export Extrahop records to Sentinel AI SIEM using triggers.",
        "tags": [
            {
                "name": "repo",
                "link": "https://github.com/gcastill0-s1/project-01"
            }
            ,
            {
                "name": "Data Generator",
                "link": "https://github.com/gcastill0-s1/project-01/tree/main/eventgen"
            }
        ]
    },
    {
        "id": "hcp-vault",
        "avatar": "img/vault_logo.svg",
        "title": "HCP Vault Hub & Spoke",
        "date": "Jan 2022",
        "description": "A component-level overview of HCP Vault in a Hub and Spoke topology with AWS",
        "tags": [
            {
                "name": "Learn",
                "link": "https://learn.hashicorp.com/tutorials/cloud/amazon-transit-gateway"
            },
            {
                "name": "repo",
                "link": "https://github.com/interrupt-software/hcp-vault-explainer"
            }
            ,
            {
                "name": "Demo",
                "link": "https://interrupt-software.github.io/hcp-vault-explainer/"
            }
        ]
    },
    {
        "id": "vault-transit",
        "avatar": "img/vault_logo.svg",
        "title": "Transit Data Keys",
        "date": "Aug 2021",
        "description": "Generate high-entropy data encryption keys from HashiCorp Vault's Transit Secrets Engine",
        "tags": [
            {
                "name": "HVAC",
                "link": "https://hvac.readthedocs.io/en/stable/usage/index.html"
            },
            {
                "name": "repo",
                "link": "https://github.com/interrupt-software/vault-transit"
            }
            ,
            {
                "name": "blog",
                "link": "https://medium.com/hashicorp-engineering/encryption-with-transit-data-keys-bfe5241ae194?source=friends_link&sk=f4d66cdf5c455b777f88f4367b5a9f39"
            }
        ]
    },
    {
        "id": "azure-devops",
        "avatar": "img/azdevops_logo.svg",
        "title": "Azure DevOps Pipelines",
        "date": "Mar 2021",
        "description": "Interactive work to explain connection flows enabled with an Azure DevOps pipeline",
        "tags": [
            {
                "name": "Flows",
                "link": "https://gcastill0.github.io/pipeline-connections"
            },
            {
                "name": "repo",
                "link": "https://github.com/interrupt-software/azdo-sampler"
            }
            ,
            {
                "name": "Video",
                "link": "https://youtu.be/X-RfUsV81Po"
            }
        ]
    },
    {
        "id": "terraform-provider",
        "avatar": "img/terraform_logo.svg",
        "title": "Terraform Provider",
        "date": "Aug 2020",
        "description": "Reference API meta data with a private Terraform Provider hosted in AWS S3",
        "tags": [
            {
                "name": "Learn",
                "link": "https://developer.hashicorp.com/terraform/tutorials/providers/provider-setup"
            },
            {
                "name": "repo",
                "link": "https://github.com/interrupt-software/terraform-provider-hashicups"
            },
            {
                "name": "Docs",
                "link": "https://developer.hashicorp.com/terraform/tutorials/providers/provider-use?in=terraform%2Fproviders"
            }
        ]
    },
    {
        "id": "web-animations",
        "avatar": "img/css3_logo.svg",
        "title": "Web animations",
        "date": "2021-now",
        "description": "Small collection of interactive animations using pure CSS, SVG and JavaScript",
        "tags": [
            {
                "name": "repo",
                "link": "https://github.com/interrupt-software/splash-pages"
            },
            {
                "name": "Demo",
                "link": "https://interrupt-software.github.io/splash-pages/"
            }
        ]
    },
    {
        "id": "terraform-configuration-designer",
        "avatar": "img/terraform_logo.svg",
        "title": "Configuration Designer",
        "date": "Sep 2019",
        "description": "A 10-minute video demonstration of the Configuration Designer in Terraform Cloud",
        "tags": [
            {
                "name": "Docs",
                "link": "https://developer.hashicorp.com/terraform/cloud-docs/registry/design"
            },
            {
                "name": "Video",
                "link": "https://youtu.be/aVatm6CyBRI"
            }
        ]
    },
    {
        "id": "peter-djong-map",
        "avatar": "img/ga-2017-09-19-16-12-11-000079200.svg",
        "title": "Peter de Jong Attractor",
        "date": "Sep 2017",
        "description": "Frame by frame capture of Peter de Jong's chaotic system using Peter Bourke's constants",
        "tags": [
            {
                "name": "Docs",
                "link": "http://paulbourke.net/fractals/peterdejong/"
            },
            {
                "name": "Repo",
                "link": "https://github.com/gcastill0/Generative-Art/tree/master/deJong"
            },
            {
                "name": "Video",
                "link": "https://youtu.be/Uuwjy6TowrU"
            }
        ]
    },
    {
        "id": "infrastructure-virtualization",
        "avatar": "img/vmware-logo.svg",
        "title": "Infra Virtualization",
        "date": "Jun 2009",
        "description": "A legacy YouTube track about infrastructure automation practices",
        "tags": [
            {
                "name": "Part 1",
                "link": "https://youtu.be/QANxne23jFY"
            },
            {
                "name": "Part 2",
                "link": "https://youtu.be/L9WS782XRmo"
            }
        ]
    }

]

window.onload = function () {
    const parser = new DOMParser();

    async function fetchSVG(svg_name) {
        const response = await fetch(svg_name);
        const svgText = await response.text();
        const svgDoc = parser.parseFromString(svgText, 'text/xml');
        return svgDoc;
    }

    const project_wrapper = document.getElementById("projects-wrapper")

    projects.forEach(project_data => {

        const project_col_div = document.createElement("div")
        const project_card_div = document.createElement("div")
        const project_card_header = document.createElement("div")
        const project_project_img_wrapper = document.createElement("div")
        const project_project_img = document.createElement("div")
        const project_card_body = document.createElement("div")
        const project_card_title = document.createElement("h5")
        const project_card_text = document.createElement("p")
        const project_card_tags = document.createElement("div")
        const project_card_tags_group = document.createElement("div")

        project_col_div.classList.add("col")
        project_card_div.classList.add("card", "shadow-sm", "h-100")
        project_card_header.classList.add("card-header")
        project_project_img_wrapper.classList.add("project_img")
        project_project_img.classList.add("img-fluid", "rounded-start", "center-block")
        project_card_body.classList.add("card-body")
        project_card_title.classList.add("card-title")
        project_card_text.classList.add("card-text")

        project_card_header.innerHTML = project_data.date
        project_card_text.innerHTML = project_data.description

        fetchSVG(project_data.avatar).then(imageSVG => {
            project_project_img.appendChild(imageSVG.documentElement);
            project_project_img_wrapper.appendChild(project_project_img);
        });

        // project_project_img.src = project_data.avatar

        project_card_tags.classList.add("d-flex", "justify-content-between", "align-items-center")
        project_card_tags_group.classList.add("btn-group")

        project_data.tags.forEach(tag => {
            const project_tag = document.createElement("a")
            const tag_button = document.createElement("button")
            tag_button.innerHTML = tag.name
            tag_button.classList.add("btn", "btn-sm", "btn-outline-secondary")
            project_tag.href = tag.link
            project_tag.appendChild(tag_button)
            project_card_tags_group.appendChild(project_tag)
        })

        project_card_tags.appendChild(project_card_tags_group)
        project_card_body.appendChild(project_card_title)
        project_card_body.appendChild(project_card_text)
        project_card_body.appendChild(project_card_tags)
        project_card_div.appendChild(project_card_header)
        project_card_div.appendChild(project_project_img_wrapper)
        project_card_div.appendChild(project_card_body)
        project_col_div.appendChild(project_card_div)
        project_wrapper.appendChild(project_col_div)

    })

    const headerNavLinks = document.querySelectorAll('nav a')
    const footerNavLinks = document.querySelectorAll('footer ul li a')

    var activePage

    headerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (activePage != link) {
                getActiveLink()
                activePage.classList.remove('text-secondary', 'active')
                activePage.classList.add('text-white')
                link.classList.remove('text-white')
                link.classList.add('text-secondary', 'active')
                activePage = link
            }
        })
    })

    footerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (activePage.href != link.href) {
                setActiveLink(link)
            }
        })
    })

    function getActiveLink() {
        headerNavLinks.forEach(link => {
            if (link.classList.contains('active')) {
                activePage = link
            }
        })
    }

    function setActiveLink(activeLink) {
        headerNavLinks.forEach(link => {
            if (link.href == activeLink.href) {
                getActiveLink()
                activePage.classList.remove('text-secondary', 'active')
                activePage.classList.add('text-white')
                link.classList.remove('text-white')
                link.classList.add('text-secondary', 'active')
                activePage = link
            }
        })
    }

    function getHeaderLink(name) {
        var activeHeaderLink
        headerNavLinks.forEach(link => {
            if (link.href.split("#").pop() === name) {
                activeHeaderLink = link
            }
        })
        return activeHeaderLink
    }

    const section_names = ["home", "about", "projects", "contact"]
    const sections = []
    section_names.forEach(section => {
        sections.push(document.getElementById(section))
    })

    const options = {
        root: null,
        threshold: 0.5,
        rootMargin: "100px"
    }

    const observer = new IntersectionObserver(function (entries, observer) {
        getActiveLink()
        entries.forEach(entry => {
            if (entry.isIntersecting && activePage.href.split("#").pop() != entry.target.id) {
                const newHeaderLink = getHeaderLink(entry.target.id)
                setActiveLink(newHeaderLink)
            }
        })
    }, options)

    sections.forEach(section => {
        observer.observe(section)
    })


}