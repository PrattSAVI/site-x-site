import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";
import ceqr from "../../public/images/part2/section4/ceqr_cover_el-min.png";
import process from "../../public/images/part2/section4/CEQR_process.png";
import ulurp from "../../public/images/part2/section4/ulurp2.svg";
import table from "../../public/images/part2/section4/table_graphic.svg";
import softsite from "../../public/images/part2/section4/soft_site.jpg";
import ImageExtended from "../../components/ImageExtended";

const SectionFour = () => {
  return (
    <>
      <Header
        isDev101pageHeader
        sectionId="PART TWO"
        pillTitle={`4. PRIMER`}
        title="Introduction to NYC Environmental and Land Use Review Process"
        subTitle="+ What is environmental and land use review?"
        subTitle2="+ What are soft sites?"
        subTitle3="+ Who are the stakeholders?"
        subTitle4="+ How are impacts evaluated during environmental review?"
        bgImage="sec4"
        logoStyle={"outline"}
      />
      <Main navType="section2">
        <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
          >
            What is environmental and land use review?
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo">
            The City has two public review processes: Uniform Land Use Review
            Procedure, or ULURP, and City Environmental Quality Review, or CEQR
            (pronounced “seeker”). This local analysis builds off of the federal
            standards for reviewing projects under the Environmental Protection
            Act (EPA) and the State Environmental Quality Review Act (SEQR,
            pronounced “seek-ra”) for decisions made by the City of New York,
            namely discretionary land use decisions that are anticipated to have
            some significant impact on the environment.
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={ceqr} />
            <Text  variant="captions" className="caption">
              Source: City of New York, Office of Environmental Coordination
            </Text>
          </Flex>
          <Flex className="flex-par">
            <Text as="p"variant="devParagraph" className="dev-par" >
              <Text as="span" variant="devSubHead" display="inline">
                CEQR
              </Text> evaluates how land use changes may potentially impact a surrounding environment. 
              Discretionary land use applications typically go through the CEQR process to determine 
              whether the project or zoning change will have significant adverse environmental impacts. 
              A larger building or change in use (intensity of type) may result in direct impacts on the 
              surrounding area. CEQR considers 19 different categories of environmental impact including 
              things like air quality, noise, open space, socioeconomic conditions, historic and cultural 
              resources, traffic, and neighborhood character.
            </Text>
          </Flex>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead">
            What does CEQR address? 
            </Text> 
            If an application is subject to environmental review, an Environmental Assessment Statement 
            (EAS) must first be completed. The EAS either includes a negative declaration (stating that 
            the project will not have significant environmental impacts), a conditional negative declaration 
            (stating that the project may have significant environmental impacts but that they can be 
            eliminated or avoided through specific mitigations), or a positive declaration, requiring 
            that a Draft Environmental Impact Statement (DEIS) must be issued.
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            After a positive declaration, the lead agency on the project will hold a public scoping 
            hearing and also accept written comments on the Draft Scope of Work for the Environmental 
            Impact Statement (EIS). Throughout this process the lead agency may alter the scope of its 
            analysis or even reconsider preliminary conclusions. The Final Environmental Impact Statement 
            (FEIS) must address all public comments and explain the rationale for either incorporating 
            or disregarding the arguments made by the public.
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={process} />
            <Text  variant="captions" className="caption">
              Source: Municipal Art Society <br /> <br />
              * If ULURP is also required, it begins when the FSOW and the DEIS are released.
            </Text>
          </Flex>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            Most development projects in New York City conform with the Zoning Resolution and are approved 
            “as-of-right.” When a proposed project requires an exception or change to existing regulations, 
            a public review process called the Uniform Land Use Review Procedure (ULURP), shown in the 
            diagram below, takes place. ULURP is also required when a City agency or group of community 
            stakeholders propose a broader (not project-specific) set of changes to the zoning regulations 
            in a particular neighborhood.
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            ULURP 
            </Text> relies on different stakeholders who provide checks and balances on one another. Before ULURP 
            begins, the Department of City Planning (DCP) must review and approve all applications. The ULURP 
            clock begins once DCP has “certified” that a ULURP application is complete. 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={ulurp} />
            <Text  variant="captions" className="caption">
              Source: Municipal Art Society 
            </Text>
          </Flex>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            The ULURP process involves the local Community Board, Borough President, City Planning Commission, 
            the City Council, and the Mayor in a stepwise, time-specific way where each reviewer has time to 
            gather feedback and make a recommendation or decision on an application. On average the ULURP process 
            takes 6-9 months, but it can take as long as 18-24 months. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            ULURP is the primary means of direct public participation in planning and development decisions. 
            At each juncture, there is a public hearing where the public has a chance to speak or submit written 
            comments. Comments from the public are typically accepted for ten days following a public hearing.
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            The Community Board is the first entity to make an advisory recommendation during the ULURP process. 
            Within 60 days of the Department of City Planning (DCP) certification of the project or rezoning application, 
            the Community Board where the project takes place must hold a public hearing to inform community members 
            about the proposal, and collect comments and concerns. Once the Community Board has made their recommendation, 
            the Borough President and Borough Board have 30 days to make their own advisory recommendations. They are not 
            required to hold public hearings, but may choose to do so.
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            Next, the City Planning Commission (CPC) has 60 days to hold a public hearing and vote on the application. 
            The CPC can either approve the application as is, approve it with modifications, or disapprove it. In most 
            cases, if the CPC votes against an application, the disapproval is final. If the application is approved or 
            modified, it is then sent to the City Council for a vote. Upon receiving the CPC decision, the City Council 
            has 50 days to hold a public hearing and vote on the application. Once the City Council has voted, the Mayor 
            has five days to either accept or veto the application. If the Mayor vetoes the application, the City Council 
            has 10 days to override the Mayor’s veto, which requires a two-thirds majority.
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            Which actions require environmental review? 
            </Text> 
            Common actions that initiate the ULURP process include:
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Changes to the City Zoning Map
            </Text> that include the location, dimension, and grades of streets, parks, public places, and 
            certain public easements. Changes to the Zoning Map are changes to zoning designations such as 
            from a manufacturing zoning district to a commercial or residential zoning district, or changing 
            boundaries of zoning districts. 
          </Text>
          <Text
            as="p"
             variant="devParagraph" className="dev-par" 
            padding="0px"
            margin="0px 60px 20px 0"
          >
            <Text as="span" variant="devSubHead" display="inline">
            Special permits modifying zoning controls
            </Text> such as use, bulk, and parking. Only some zoning special permits are required to be reviewed 
            by the CPC. This includes sale, lease or exchange of city property. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            A capital project
            </Text> is the construction or acquisition of a public improvement classified as a capital asset of the City. 
            This includes new city facilities such as sanitation garages, fire houses, libraries and sewage treatment plants.
          </Text>
          </Flex>
          <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
          >
            Who are the Stakeholders in the Land Use and Environmental Review Process? 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={table} />
            <Text  variant="captions" className="caption">
              Source: Municipal Art Society 
            </Text>
          </Flex>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            Everyday New Yorkers
            </Text> General stakeholders include individual members of the public who have a wide range of land use and 
            environmental experience and expertise. Some users will be familiar with navigating the review processes while 
            others benefit from guides and descriptions of planning issues and relationships to vulnerability, access, and 
            development potential. This group also includes labor, trades, and other professions tied to building activity 
            and management across the city. 

          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            Community Boards 
            </Text> Community Boards, especially their Environmental and Land Use Committees, help to translate and 
            determine neighborhood priorities early within the ULURP Process. Through their preparation of Community 
            District Needs Assessments and other relevant opinions, they influence public conversation about how 
            applications advance, ignore, or stand in opposition to neighborhood priorities. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            Non-profit Organizations 
            </Text> Non-profit organizations may be focused around a set of key issues or a focused geography. These 
            groups may engage a variety of users within their staff, including policy advisors, community organizers, 
            and communication specialists. The relationship between these users and the community served can reinforce 
            and interpret community-identified concerns and opportunities to meaningfully engage in proactive planning 
            and environmental review processes, including supporting scoping, public testimony, and advocacy campaigns. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            The Private Sector  
            </Text> 
            As professionals, planning practitioners, consultants and developers are also advocates for the review 
            process, their clients, or their investors. These users are responsible for generating meaningful community 
            engagement on proposals, preparing detailed environmental analysis, and communicating complex planning concepts, 
            risks and opportunities. These professionals are also tasked with creating a set of alternative development scenarios 
            that can respond to both client needs and  neighborhood-specific considerations. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            Elected Officials (City Council Members, Borough Presidents, and Public Advocate) & Staff   
            </Text> Elected officials and their staff are critical to the land use and environmental review processes. 
            Given the variety of issues under consideration by these users, not every office is equipped with land use 
            planning expertise.Given their role in the ultimate decision-making process, these stakeholders can introduce 
            key questions during the project scoping phase, frame key considerations during public hearings, and galvanize 
            their colleagues to  support or oppose a project. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            City Planning Commission (CPC)   
            </Text> CPC serves as an administrative body in the land use review process. As a body, they must examine 
            critical indicators, especially those focused on health and equity, as well as public discussion into their 
            decision-making. Their role and the public perspective of their reflection of the city as a whole shifts 
            from administration to administration as different Department of City Planning Commissioners and Planning 
            Commissioners will have different sensibilities. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" >
            City Agencies & Departments    
            </Text> The Mayor’s Office of Environmental Coordination and Department of City Planning, with assistance 
            from many City agencies, are responsible for updating, interpreting, and implementing the guidelines in the 
            CEQR Technical Manual. These City agencies are also responsible for implementation and mitigation after projects 
            have been completed to ensure that levels of service, budget commitments, and actions prescribed to the developer 
            meet CEQR-identified mitigation requirements.
          </Text>
           </Flex>
          <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            mb="0px"
          >
            What are soft sites? Why are they important? 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            One factor often overlooked in CEQR evaluations is how City actions affect the future development of soft sites. 
            The CEQR Technical Manual defines soft sites as “sites where a specific development is not currently proposed or 
            being planned but may reasonably be expected to occur by the projected build year.”  
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={softsite} />
            <Text  variant="captions" className="caption">
              Source: Municipal Art Society 
            </Text>
          </Flex>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            The projection that future development could occur on a site “as-of-right” under existing zoning, in CEQR parlance, 
            the “no-action condition,” must be supported through an analysis of a range of factors, including the uses and 
            bulk allowed, the size of the development site, recent real estate trends in the area, recent and expected future 
            changes in population and employment in the area, and government policies or plans. 
          </Text>
          </Flex>
          <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            mb="0px"
          >
            How are soft sites identified? 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            CEQR review identifies two types of soft sites: 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par"  marginLeft="60px">
            <Text as="span" variant="devSubHead" display="inline">
            Projected: 
            </Text>{" "}
            Future development is assumed for the purpose of impact identification 
            <br />
            <Text as="span" variant="devSubHead" display="inline">
            Potential: 
            </Text>{" "}
            Future development is assumed for the purpose of impact identification 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            Unique from both “projected” and “potential” sites which are presented in 
            CEQR evaluations as more likely to be developed within a given time period, 
            soft sites are considered less likely to be developed due to a variety of factors 
            such as sites that are small or irregularly shaped, or those encumbered by regulatory 
            restrictions such as location in a historic district, which requires additional agency 
            oversight to be developed. 
          </Text>
          <Text as="p"variant="devParagraph" className="dev-par par-solo" >
            The soft site selection process evaluates site characteristics around three broad themes:  
          </Text>
          <Flex className="flex-par" flexDirection="row">
          <Box
            width="30%"
            marginRight="40px"
            backgroundColor="transparent"
            border="1px solid #908E8E"
            textAlign="right"
            padding="20px"
            fontSize="30px"
            fontWeight="700"
            lineHeight="1.2"
            >
              Site Attributes
            </Box>
            <Text as="p"  variant="devParagraph" className="dev-par" width="70%">
              <i>Which lots are most likely to be developed?</i> <br />
              <i>
                Are the current attributes sufficient for identifying soft
                sites?{" "}
              </i>
              <br />
              <br />
              Under CEQR, lots larger than 5,000 square feet that possess
              substantially less than the maximum allowable built FAR are
              considered more susceptible to development. SITE x SITE
              investigates the accuracy of the current site attributes, which
              are limited in scope, in comprehensively capturing potential soft
              sites.
            </Text>
          </Flex>
          <Flex className="flex-par">
            <Box
            width="30%"
            marginRight="40px"
            backgroundColor="transparent"
            border="1px solid #908E8E"
            textAlign="right"
            padding="20px"
            fontSize="30px"
            fontWeight="700"
            lineHeight="1.2"
            >
              Social + Neighborhood Factors
            </Box>
            <Text as="p"  variant="devParagraph" className="dev-par" width="70%" >
              <i>
                How do physical, cultural, and community characteristics
                influence development?
              </i>
              <br />
              <br />
              CEQR outlines a series of secondary considerations to further
              evaluate the development potential of prospective soft sites.
              These include real estate trends and governmental policies,
              changes to population and employment, and site-specific
              conditions. SITE x SITE considers whether these broadly defined
              characteristics might benefit from further refinement informed by
              neighborhood-specific development scenarios.
            </Text>
          </Flex>
          <Flex className="flex-par">
            <Box
            width="30%"
            marginRight="40px"
            backgroundColor="transparent"
            border="1px solid #908E8E"
            textAlign="right"
            padding="20px"
            fontSize="30px"
            fontWeight="700"
            lineHeight="1.2"
            >
              Development Limitations
            </Box>
            <Text as="p"  variant="devParagraph" className="dev-par" width="70%">
              <i>
                What attributes make development activity difficult, costly, or
                prohibitive?{" "}
              </i>
              <br />
              <br />
              CEQR excludes sites that are difficult to relocate or demolish,
              such as certain utility and institutional uses and buildings that
              contain rent stabilized units. The lookback at a decade of
              development in SITE x SITE considers whether these assumptions
              hold.
            </Text>
          </Flex>
          </Flex>
          <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            mb="0px"
          >
            How are impacts evaluated during environmental review? 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          During the environmental review process the project will evaluate a minimum of two scenarios, 
          the “No-Action” scenario and the “Reasonable Worst Case Development Scenario” (RWCDS)  though 
          additional, alternative scenarios may also be evaluated. The environmental assessment process 
          examines the incremental differences between what can be built under existing regulations (“No-Action”)  
          and the possible future with a changed or expanded project in operation (RWCDS).
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  >
          <Text as="span" variant="devSubHead" >
          “No-Action” 
          </Text> 
          The “No-Action” scenario assesses what can be built within existing policy or regulations. 
          “No-Action” does not mean no change. As a common misunderstanding, this alternative does 
          not evaluate the existing condition but rather the build out of existing regulations. As 
          an example, for a vacant site that allows for a six-story building, the “No-Action” 
          alternative would evaluate potential impacts for the six-story building. While there would 
          be a change in use from the vacant lot to new construction, there would be no accounting of 
          that potential impact in the environmental analysis. Instead, the building that could be 
          expected under existing zoning would serve as the baseline for comparative analysis between 
          different scenarios or alternatives. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  mb="105px">
          <Text as="span" variant="devSubHead" >
          “Reasonable-Worst Case Development Scenario” (RWCDS)
          </Text> 
          From the range of possible scenarios that are considered reasonable and likely, the scenario with 
          the most severe environmental consequences is chosen for analysis. This is considered to be the 
          RWCDS, the use of which ensures that, regardless of which scenario actually occurs, its impacts 
          would be no worse than those considered in the environmental review. Specific impacts related to 
          a less severe environmental impact need not be thoroughly reviewed within alternative scenarios 
          that create less potential impact than the RWCDS.
          </Text>

        </Flex>
      </Main>
    </>
  );
};

export default SectionFour;
