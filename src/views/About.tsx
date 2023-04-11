import { Box, Link } from "@mui/material";
import InfoCard from "components/ui/InfoCard";
import { ReactElement } from "react";
import ChristmasTree from "images/christmas-tree.jpg";
import Flex from "components/ui/Flex";

export default function About(): ReactElement {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <InfoCard
        sx={{
          maxWidth: "80rem",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={ChristmasTree}
          sx={{ height: "450px", borderRadius: "30px" }}
        />
        <Flex
          sx={{
            p: "4.8rem",
            justifyContent: "center",
          }}
        >
          Welcome to our little town’s website. We hope you’ll stay a while.
          Burnt River is a hamlet located in the middle of the former Township
          of Somerville, in the City of Kawartha Lakes, Ontario, Canada. The
          community is on the Burnt River.
        </Flex>
      </InfoCard>
      <InfoCard
        sx={{
          maxWidth: "80rem",
          height: "100%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Flex
          sx={{
            p: "4.8rem",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Flex
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              width: "100%",
              justifyContent: "center",
            }}
          >
            History of the Burnt River
          </Flex>
          <Flex
            sx={{
              pt: "2.4rem",
              justifyContent: "center",
            }}
          >
            By Guy Scott <br />
            <br />
            Of all the features of the Kinmount area, none dominates like the
            Burnt River. It is the single largest barrier in the entire area. It
            defined the road system, settlement pattern and actual location of
            Kinmount Village. The village of Kinmount was born at the spot the
            Bobcaygeon Colonization Road crossed the Burnt River. The bridge
            became the focal point of the village, even more so than the dam
            until the later railway station became the town centre. It was so
            difficult to bridge the mighty Burnt, that the Kinmount bridge
            remained the only such structure over the river for many miles both
            upstream and downstream. Likewise, Minden was born on the spot where
            the road crossed the equally mighty Gull River. Even today, the next
            bridges over the Burnt River north are above Gelert or at Furnace
            Falls. South of town, bridges eventually were built at the 11th Line
            of Somerville (Watson’s Siding), 9th Line (Byrne’s Line), 2 Bridges
            at Burnt River and one last attempt at the 3rd Line of Somerville
            (Baddow). These bridges all suffered destruction in the spring flood
            at one time or another; and the 9th and 3rd Line bridges were not
            replaced. <br />
            <br />
            The Burnt River (likely) derives its name form the burnt (brown)
            colour of its water. One theory has it named after a huge forest
            fire that charred the whole area just before settlement. Another
            theory has it that suspended iron ore particles that ‘browned’ its
            waters, but both these theories are false. The fast current of the
            river makes it a natural to collect lots of suspended soil, dirt if
            you please, and the brown colour comes from the dirt particles being
            washed along. It is no coincidence it was not named the ‘Crystal
            Clear’ River! <br />
            <br />
            The Burnt River runs from its headwaters in Haliburton to Rosedale,
            where it empties in Cameron Lake. It drains an area of 1300 square
            kilometres: a good portion of east Haliburton County as well as
            large chunks of Galway & Somerville Townships. There are 14 dams on
            the watershed: 13 used by the Trent-Severn Waterway to control water
            flow and the dam at Kinmount. The Kinmount dam is the property of
            the MNR and may be termed a ‘historical’ dam. It does nothing for
            the Trent Canal, but was rather geared to sawmills at Kinmount.
            There are 3 main branches of the Burnt River that converge just
            above Kinmount at the Three Brothers Falls: Irondale, Burnt (Centre)
            and Drag branches. The Irondale branch is the largest tributary.
            <br />
            <br /> The Burnt River is a ‘tumultuous’ river. It is broken by a
            large number of waterfalls, rapids and chutes which make it a
            challenging course for canoers and kayakers; more so if you are
            travelling downstream. Since it has a steep fall in altitude, the
            River features a very noticeable current along most of its route.
            The largest falls include the Three Brothers Falls north of Kinmount
            and the High Falls just south of town. However, there are many
            smaller falls and rapids including Furnace Falls and Jacob’s Ladder
            north of the village and Low (or Little) Falls south of town. After
            the Burnt River tumbles over the High Falls, it leaves the Canadian
            Shield or granite landform and becomes noticeably less turbulent.
            The little falls at Burnt River is the head of navigation from
            Cameron Lake: the furthest point where boats can reach without a
            portage.
            <br />
            <br /> As a water transport route, the Burnt River was essentially
            useless. Too many waterfalls and rapids obstructed the river north
            of Burnt River village to make water transport of goods practical.
            To the pioneer moving north, it followed a wandering, tortuous
            course freely interspersed with fallen trees: blocked by waterfalls
            and featuring a fierce current. No doubt a few fur trappers paddled
            north to reap furs from the rich Haliburton trapping grounds, but
            most early trappers preferred the more placid Gull River route into
            the Haliburton Highlands.
            <br />
            <br /> Likewise, the Burnt River was useless as a cadge route for
            the lumbermen. Their supplies were drawn by horse and wagon up the
            Bobcaygeon Road to the winter shanties. But the Burnt River was
            essential to the lumber industry as a route the cut logs travelled
            on the way south to the mills along the Kawartha Lakes. In fact, the
            Burnt River route was preferable to the Gull route simply because of
            its fast-paced current and lack of large lakes. On the Gull system,
            it was necessary to ‘warp’ or tow the logs across the still lakes.
            This was a painful and time consuming exercise. In the early days, a
            raft with a team of horses on a capstan would likely warp the booms
            of logs across the lake until they could be sent down the outlet
            river (to the next lake!). Eventually the alligator steam boat
            replaced the noble horse. This mini-tugboat simply towed the boom of
            logs across the lake. The Alligator could even ‘warp’ itself
            overland to the next lake on some smaller portages. The only place
            these aids were used on the Burnt River watershed was from
            Haliburton (Head Lake) to Ingoldsby (Kashagawigamog Lake). After
            that it was downhill all the way on the Drag-Burnt branch. The
            Central and Irondale branches involved no lakes & hence no aids.
            Yes, the falls and rapids were a nuisance, but to cost-conscious
            lumberman, speed was a bonus! <br />
            <br />
            The log drives often took a couple of months to pass through
            Kinmount Village. Of course the logs were forced to go over the dam.
            Stop logs were removed to form a spillway and sweating river drivers
            would push the logs on their way with long pike poles. Often
            different companies’ log drives would get mixed together at the dam
            and the drivers were forced to sort the logs. Each company stamped
            its property with a brand simply by hammering the log with a hammer
            bearing its brand. A stone sorting jack was built on the west side
            of the river to help sort the logs. <br />
            <br />
            River driving was a dangerous profession, practiced only by the
            bravest and most skilled (or foolish?) of lumber workers. At the
            many waterfalls and especially rapids, the logs would often catch on
            the rocks and create a log jam. Sometimes the jam could be freed
            before it grew to mammoth proportions, but other times… In such
            circumstances, jam crackers were brought in to clear the mess.
            Usually there was a ‘key-log’ that once pried free, allowed the jam
            to dissolve. At times the jam broke up too quickly for the cracker
            or drivers to safely escape. In such times, tragic results were
            often the result. The many rapids and waterfalls of the Burnt River
            claimed its share of victims; in fact, these trouble spots were
            often graded by the number of graves that filled their impromptu
            little cemeteries. The Hawk River Chute in Stanhope Township was the
            most dangerous in the area, its cemetery contained 11 graves. The
            Devil’s Chute at Irondale memorialized 7 or 9 drivers’ last resting
            place. The High Falls south of Kinmount had at least 3 burials. Life
            was dangerous on the River Drive. <br />
            <br />
            The earliest lumbermen noted low water levels as problems for their
            log drives. After the spring freshet passed, the Burnt slowed down
            and became full of obstacles like deadheads, rocks, sandbars, etc.
            But this problem could be fixed by creating a series of dams at key
            points. These dams could store water and prolong the spring flood
            until the log drives had passed. The dams also kept the water levels
            higher at key points like Kinmount and Ingoldsby. Many other minor
            dams were built in various places for temporary use until the
            lumbermen moved on. <br />
            <br />
            By the early 1900s, the last of the big log drives were gone, but
            sawmills at Kinmount and Burnt River still used the Burnt to float
            its raw material to the mill. The logs were often stored in the
            river until their turn with the saw came. Thus the Burnt River would
            be filled with logs most of the summer. Even as late as 1970, booms
            filled with logs were still a sight in town. <br />
            <br />
            The River also serves the area residents in other ways. The village
            always had a town swimming hole. In winter its frozen surface became
            a hockey rink if weather permitted. But the turbulent nature of the
            Burnt River made safe ice a precarious affair, and local residents
            have always been wary of the River. The wariness has meant that
            drowning in the River has been quite rare. In fact, area lakes and
            smaller streams are more often hazardous drowning sites simply
            because people let their guard down.
            <br />
            <br /> The Burnt River was a noted fishing spot for the local
            anglers. The dam created a ‘lake’ with deep water all the way up to
            the Three Brothers’ Falls and was the haunt of muskies, pickerel,
            bass and trout to name the most popular species. The dam was also a
            popular spot, but many local anglers kept small boats above the dam
            to fish upstream. Downstream, trout & pickerel were the favourite
            catches. The smaller tributaries of the Burnt were often filled with
            trout in the spring. The Burnt around Kinmount was rather unique in
            that it featured both cold water fish (trout) and warm water fish
            (muskie & pickerel). In recent times, fishing upon the Burnt has
            declined as the fish have almost disappeared due to a variety of
            reasons. <br />
            <br />
            The Burnt River still serves as a water source for the village of
            Kinmount. The pioneers preferred wells to the dark waters of the
            River. Not only was the water dark, but it was often filled with
            ‘foreign substances’ or garbage (or worse!) Upstream farmers dumped
            manure, trash etc. in the river. It was not unusual to see a dead
            cow or horse floating down the river. Hotels on the Main Street had
            stables along the riverbank complete with trapdoors for quick
            ‘disposal’ of the manure.
            <br />
            <br /> But in today’s world, larger supplies of water are necessary
            for modern homes. Improved water filtration systems made
            exploitation of the River practicable and by the 1940s a ‘town water
            system’ was in operation. Today, a much improved pump house has been
            constructed to convert the Burnt River water for residents and
            businesses of the village. Today, the log drives are long done. The
            Burnt River is the haunt of the canoer, the fishermen and those who
            just admire the waterfront view. <br />
            <br />
          </Flex>
          <Link
            href="https://maryboro.ca/story/history-of-the-burnt-river/"
            sx={{
              textDecoration: "underline",
              color: "black",
              fontSize: "16px",

              textAlign: "center",
            }}
          >
            For captions and uncropped images, click here.
          </Link>
        </Flex>
      </InfoCard>
    </Flex>
  );
}
