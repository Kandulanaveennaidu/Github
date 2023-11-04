import { useEffect } from "react";
import { Button } from "@mui/material";
import Property1MoreVertIcon from "./Property1MoreVertIcon";
import FormContainer from "./FormContainer";
import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <a className={styles.home} data-animate-on-scroll>
      <div className={styles.save1000sOfContainer}>
        <span className={styles.save1000sOfContainer1}>
          <span>Save 1000s</span>
          <span className={styles.ofExpensiveCoder}>
            {" "}
            of expensive coder hours
          </span>
        </span>
      </div>
      <div className={styles.paragraph}>
        With cloud native technologies, we assist in modernising infrastructure
        and applications for resilience and scalability.
      </div>
      <div className={styles.frame}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frame1}>
            <div className={styles.noMoreNo}>
              no more, no less. Deploy from our single pane of glass, manage
              them with ease and scale up as fast as your workload grows.
            </div>
          </div>
          <div className={styles.frame2}>
            <b className={styles.buildYourAudience}>
              Build your audience and grow your brand
            </b>
          </div>
          <div className={styles.frame3}>
            <div className={styles.getStartedNowWrapper}>
              <b className={styles.getStartedNow}>Get Started Now</b>
            </div>
          </div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
      </div>
      <div className={styles.frame4}>
        <div className={styles.feature}>
          <b className={styles.features}>Features</b>
        </div>
      </div>
      <div className={styles.modernizeAppsInfrastructureParent}>
        <div className={styles.modernizeAppsInfrastructure}>
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </div>
        <div className={styles.knowMoreAboutOurKeyFeatur}>
          <img
            className={styles.cardsScreenIcon}
            alt=""
            src="/cards-screen.svg"
          />
          <div className={styles.texts}>
            <div className={styles.title}>Real-time risk monitoring</div>
            <div className={styles.paragraph1}>
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </div>
          </div>
        </div>
        <div className={styles.simpleSolution}>
          <div className={styles.frame5}>
            <div className={styles.texts1}>
              <div className={styles.collaborativeWorkflows}>
                Collaborative workflows
              </div>
              <div className={styles.shareArtefactsEasily}>
                Share artefacts easily and collaborate with team members,
                auditors, and pen testers via automated procedures. To manage
                daily compliance with automatic notifications and reminders,
                create, assign, and track tasks.
              </div>
            </div>
          </div>
          <img
            className={styles.cardsScreenIcon1}
            alt=""
            src="/cards-screen1.svg"
          />
        </div>
      </div>
      <div className={styles.theXerocodeeWayParent}>
        <div className={styles.theXerocodeeWay}>{`The Xerocodee way `}</div>
        <img className={styles.rocketIcon} alt="" src="/rocket.svg" />
        <div className={styles.parent}>
          <div className={styles.div}>01</div>
          <img className={styles.frameItem} alt="" src="/line-38.svg" />
          <div className={styles.accelerateBySelfServing}>
            {" "}
            Accelerate by self-serving production-ready infrastructure and
            customize as you scale.
          </div>
          <div className={styles.selfServeInfrastructure}>
            Self serve Infrastructure
          </div>
          <div className={styles.yourInfrastructureRuns}>
            Your infrastructure runs on your AWS or GCP account. Never get
            locked in. Infinitely scalable.Azure support coming soon)
          </div>
          <div className={styles.inYourCloud}>In Your Cloud</div>
          <div className={styles.frameInner} />
          <b className={styles.selfHostedApps}>Self-hosted Apps</b>
          <div className={styles.rectangleDiv} />
          <b className={styles.yourCloud}>Your Cloud</b>
          <div className={styles.frameChild1} />
          <b className={styles.infraComponents}>Infra components</b>
          <img className={styles.groupIcon} alt="" src="/group-25415.svg" />
        </div>
        <div className={styles.div1}>03</div>
        <img className={styles.lineIcon} alt="" src="/line-40.svg" />
        <div className={styles.automaticallyTrackResource}>
          Automatically track resource costs, across clouds, on every change.
          Visualize k8s pod metrics - CPU, Network, and Memory.
        </div>
        <div className={styles.visibilityIntoCosts}>
          Visibility into costs and metrics
        </div>
        <div className={styles.div2}>02</div>
        <img className={styles.frameChild2} alt="" src="/line-38.svg" />
        <div className={styles.setUpAutomated}>
          Set up automated deployments of your application in 5 minutes and get
          back to building stuff that matters.
        </div>
        <div className={styles.deployApplicationsFast}>
          Deploy applications, fast!
        </div>
        <div className={styles.stayOnTop}>
          Stay on top of your cloud spending with custom cost dashboards and
          reports — sort, filter, and group by your various accounts, resources,
          and cloud regions.
        </div>
        <div className={styles.customizableCostDashboards}>
          Customizable cost dashboards and reports
        </div>
        <div className={styles.seeTheCost}>
          See the cost of a specific resource while choosing it (before
          provisioning). It saves you the hassle of searching through the
          complex pricing pages of your cloud provider or tools.
        </div>
        <div className={styles.previewInfraCosts}>Preview infra costs</div>
        <div className={styles.comesWithBuiltIn}>
          Comes with built-in Kubernetes pod metrics. Easily plug in monitoring
          and observability tools of your choice, such as Grafana/Loki, DataDog,
          Prometheus, and more. Stay on top of your application metrics from day
          1.
        </div>
        <div className={styles.observabilityFromDay}>
          Observability from day one
        </div>
        <div className={styles.portableBuildsPoweredByDagParent}>
          <div className={styles.portableBuildsPowered}>
            Portable builds powered by Dagger and continuous deployments powered
            by ArgoCD - you gain more control of your pipelines with composable
            custom, build, and deploy stages.
          </div>
          <div className={styles.configurableBuildAnd}>
            Configurable Build and Deploy pipelines
          </div>
          <div className={styles.justConnectYour}>
            Just connect your repo with one click and push. Argonaut’s deep
            integration with GitHub Actions and GitLab pipelines build and
            deploy your code on every push.
          </div>
          <div className={styles.pushToDeploy}>Push to Deploy</div>
          <div className={styles.buildParent}>
            <div className={styles.build}>Build</div>
            <div className={styles.deploy}>Deploy</div>
            <div className={styles.deploy1}>Deploy</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.gitPushParent}>
            <div className={styles.gitPush}>Git Push</div>
            <div className={styles.deploy2}>Deploy</div>
            <img className={styles.vectorIcon7} alt="" src="/vector6.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector7.svg" />
            <img className={styles.vectorIcon9} alt="" src="/vector8.svg" />
            <img className={styles.vectorIcon10} alt="" src="/vector9.svg" />
            <img className={styles.vectorIcon11} alt="" src="/vector10.svg" />
            <img className={styles.vectorIcon12} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon13} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon14} alt="" src="/vector12.svg" />
            <img className={styles.groupChild} alt="" src="/group-25417.svg" />
            <img className={styles.groupItem} alt="" src="/group-25418.svg" />
            <img className={styles.groupInner} alt="" src="/group-25419.svg" />
            <img className={styles.groupChild1} alt="" src="/group-25420.svg" />
            <img className={styles.reactIcon} alt="" src="/react.svg" />
            <div className={styles.div3}>{`</>`}</div>
          </div>
          <div className={styles.quicklyDeployApps}>
            Quickly deploy apps to containerized or serverless runtimes on your
            cloud and customize architectures to cost and performance
            constraints. Deploy on Kubernetes using dockerfiles or buildpacks,
            AWS Lambda, or GCP Cloud Functions.
          </div>
          <div className={styles.multipleRuntimes}>Multiple runtimes</div>
          <div className={styles.everyDeploymentIs}>
            Every deployment is a zero-downtime deployment without you needing
            to choose custom configurations. You can easily configure
            auto-scaling, resource limits, and health-check URL to further
            optimize application uptime.
          </div>
          <div className={styles.scaleInfinitely}>Scale infinitely</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <img
              className={styles.toolsObservabilityGrafanaIcon}
              alt=""
              src="/toolsobservabilitygrafana@2x.png"
            />
            <img
              className={styles.toolsDeliveryAzureIcon}
              alt=""
              src="/toolsdeliveryazure@2x.png"
            />
            <img
              className={styles.toolsDeliveryGitlabIcon}
              alt=""
              src="/toolsdeliverygitlab@2x.png"
            />
            <img className={styles.redisIcon} alt="" src="/redis.svg" />
          </div>
          <div className={styles.image30Parent}>
            <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
            <img className={styles.image31Icon} alt="" src="/image-30@2x.png" />
            <img
              className={styles.toolsDeliveryAzureIcon1}
              alt=""
              src="/toolsdeliveryazure1@2x.png"
            />
            <img
              className={styles.toolsObservabilityGrafanaIcon1}
              alt=""
              src="/toolsobservabilitygrafana1@2x.png"
            />
            <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
            <img className={styles.image33Icon} alt="" src="/image-32@2x.png" />
            <img
              className={styles.toolsDeliveryAzureIcon2}
              alt=""
              src="/toolsdeliveryazure2@2x.png"
            />
            <img
              className={styles.toolsObservabilityGrafanaIcon2}
              alt=""
              src="/toolsobservabilitygrafana2@2x.png"
            />
            <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
          </div>
        </div>
        <div className={styles.total1272Parent}>
          <div className={styles.total1272}>Total - $1272</div>
          <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
          <div className={styles.groupChild6} />
          <b className={styles.b}>-23%</b>
          <img className={styles.groupChild7} alt="" src="/group-25437.svg" />
        </div>
        <img className={styles.frameChild3} alt="" src="/group-25480.svg" />
        <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
        <img className={styles.frameChild4} alt="" src="/group-25481.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <div className={styles.title1}>See our success stories</div>
          <img className={styles.frameChild5} alt="" src="/group-53.svg" />
          <img className={styles.frameChild6} alt="" src="/group-25317.svg" />
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild7} />
            <div className={styles.icon}>
              <img
                className={styles.backgroundIcon}
                alt=""
                src="/background.svg"
              />
              <div className={styles.div4}>“</div>
            </div>
            <div className={styles.frame6}>
              <div className={styles.thereAreManyContainer}>
                <p className={styles.thereAreMany}>
                  There are many variations of passages of Lorem Ipsum available
                </p>
                <p className={styles.thereAreMany}>
                  but the majority have sufferg alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage.
                </p>
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.thereAreManyContainer}>
                <p className={styles.thereAreMany}>
                  <span className={styles.span}>-</span>
                  <span className={styles.abcdefghIjklmnop1}>
                    Abcdefgh Ijklmnop
                  </span>
                </p>
                <p className={styles.frontendEngineer}>Frontend Engineer</p>
              </div>
            </div>
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
            <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
          </div>
        </div>
        <Property1MoreVertIcon
          imageDimensions="/iconinfo.svg"
          property1MoreVertIconWidth="60px"
          property1MoreVertIconHeight="60px"
          property1MoreVertIconOverflow="unset"
          property1MoreVertIconPosition="absolute"
          property1MoreVertIconTop="501px"
          property1MoreVertIconLeft="calc(50% - 30px)"
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.frame8}>
          <div className={styles.otherLinks}>
            <div className={styles.frame9}>
              <div className={styles.othersLinks}>Others links</div>
              <div className={styles.faq}>FAQ</div>
            </div>
            <div className={styles.frame10}>
              <div className={styles.careers}>Careers</div>
              <div className={styles.careers}>Privacy Ploicy</div>
            </div>
            <div className={styles.frame11}>
              <div className={styles.careers}>{`Trems & Condition`}</div>
              <div className={styles.careers}>Support</div>
            </div>
          </div>
          <div className={styles.ourServices}>
            <div className={styles.frame12}>
              <div className={styles.othersLinks}>Our Services</div>
              <a
                className={styles.infrastructureProvisioning}
                href="https://www.hashicorp.com/solutions/infrastructure-provisioning"
                target="_blank"
              >
                Infrastructure provisioning
              </a>
            </div>
            <div className={styles.frame13}>
              <div className={styles.careers}>
                Network infrastructure automation
              </div>
              <div className={styles.careers}>Cost optimization</div>
            </div>
            <div className={styles.frame14}>
              <div className={styles.careers}>Cloud migration</div>
              <div className={styles.careers}>Kubernetes at scale</div>
            </div>
          </div>
          <div className={styles.ourLinks}>
            <div className={styles.frame15}>
              <div className={styles.othersLinks}>Our links</div>
              <div className={styles.faq}>Home</div>
            </div>
            <div className={styles.frame16}>
              <div className={styles.careers}>About us</div>
              <div className={styles.integrations}>Integrations</div>
            </div>
            <div className={styles.frame17}>
              <div className={styles.careers}>Team</div>
              <div className={styles.careers}>Blog</div>
            </div>
          </div>
          <div className={styles.frame18}>
            <div className={styles.frame19}>
              <div className={styles.careers}>
                <p className={styles.thereAreMany}>
                  You get just what you need to run your cloud
                </p>
                <p
                  className={styles.thereAreMany}
                >{`workloads--no more, no less. `}</p>
                <p
                  className={styles.thereAreMany}
                >{`Deploy from our single pane of glass, `}</p>
                <p
                  className={styles.thereAreMany}
                >{`manage them with ease and scale `}</p>
                <p className={styles.thereAreMany}>
                  up as fast as your workload grows
                </p>
              </div>
              <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
            </div>
          </div>
        </div>
        <div className={styles.texts2}>
          <div
            className={styles.termsCondition}
          >{`Terms & Condition  |   Privacy Policy `}</div>
          <div className={styles.copyright2023Container}>
            <span>{`Copyright © 2023 `}</span>
            <b>{`EXOCODE TECHNOLOGIES | `}</b>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
      <section className={styles.frame20}>
        <div className={styles.frame21}>
          <img
            className={styles.logo41}
            loading="lazy"
            crossOrigin="anonymous"
            alt=""
            src="/logo-4-1@2x.png"
          />
          <div className={styles.home2}>Home</div>
        </div>
        <div className={styles.frame22}>
          <div className={styles.home2}>Team</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.frame23}>
          <div className={styles.careers1}>Careers</div>
          <Button sx={{ width: 113.3 }} color="primary" variant="contained">
            Sign In
          </Button>
        </div>
      </section>
      <div className={styles.frame24}>
        <div className={styles.frame25}>
          <div className={styles.frame26}>
            <b className={styles.apps}>Apps</b>
            <div className={styles.frameChild8} />
          </div>
          <div className={styles.frame27}>
            <b className={styles.appConfigs}>App Configs</b>
          </div>
          <div className={styles.frame28}>
            <b className={styles.pipelines}>Pipelines</b>
          </div>
          <div className={styles.frame27}>
            <b className={styles.appConfigs}>Infra Creation</b>
          </div>
          <div className={styles.frame27}>
            <b className={styles.appConfigs}>Cost</b>
          </div>
          <div className={styles.frame28}>
            <b className={styles.pipelines}>Add-ons</b>
          </div>
          <div className={styles.frame27}>
            <b className={styles.appConfigs}>Monitoring</b>
          </div>
          <div className={styles.frame27}>
            <b className={styles.appConfigs}>Connections</b>
          </div>
        </div>
      </div>
      <div className={styles.frame34}>
        <div className={styles.frame35}>
          <img className={styles.frameChild9} alt="" src="/vector-17.svg" />
          <div className={styles.group253071Wrapper}>
            <img
              className={styles.group253071}
              alt=""
              src="/group-25307-1@2x.png"
            />
          </div>
          <div className={styles.cd1Wrapper}>
            <img className={styles.cd1Icon} alt="" src="/cd-1@2x.png" />
          </div>
          <div className={styles.database3Wrapper}>
            <img
              className={styles.database3Icon}
              alt=""
              src="/database-3@2x.png"
            />
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-325.svg"
          />
          <div className={styles.frameChild10} />
          <div className={styles.frameChild11} />
          <div className={styles.frameChild12} />
        </div>
      </div>
      <div className={styles.frame36}>
        <div className={styles.frame37}>
          <b className={styles.withoutXerocodee}>Without Xerocodee</b>
          <b className={styles.withXerocodee}>With Xerocodee</b>
          <b className={styles.withoutXerocodee}>Without Xerocodee</b>
          <b className={styles.withXerocodee}>With Xerocodee</b>
        </div>
      </div>
      <img
        className={styles.d346fd9332c07aca455046WithArIcon}
        alt=""
        src="/63d346fd9332c07aca455046-with-argonaut-1.svg"
      />
      <img className={styles.vectorIcon15} alt="" src="/vector13.svg" />
      <img className={styles.vectorIcon16} alt="" src="/vector14.svg" />
      <img className={styles.vectorIcon17} alt="" src="/vector15.svg" />
      <img className={styles.homeChild} alt="" src="/group-25482.svg" />
      <div className={styles.frame38}>
        <div className={styles.roundedRectangle} />
        <div className={styles.modernSecureInfrastructure}>
          Modern Secure Infrastructure Approach
        </div>
        <div className={styles.security}>Security</div>
        <div className={styles.icon1} />
        <FormContainer
          featureDescription="Flexible Secure Application Connectivity"
          serviceDescription="Networking"
        />
        <div className={styles.card6}>
          <div className={styles.icon2} />
          <div className={styles.frame39}>
            <div className={styles.applications}>Applications</div>
            <div className={styles.automateApplicationDeploymen}>
              Automate Application Deployment for Agility
            </div>
          </div>
        </div>
        <FormContainer
          featureDescription="Automated Cloud Infrastructure Workflow"
          serviceDescription="Infrastructure"
          propTop="231px"
          propWidth="315px"
          propWidth1="232px"
        />
        <img
          className={styles.infrastructureIcon}
          alt=""
          src="/infrastructure@2x.png"
        />
        <img
          className={styles.cyberSecurityIcon}
          alt=""
          src="/cybersecurity@2x.png"
        />
        <img
          className={styles.neuralNetworkIcon}
          alt=""
          src="/neuralnetwork@2x.png"
        />
        <img
          className={styles.developmentIcon}
          alt=""
          src="/development@2x.png"
        />
        <div className={styles.selfServeInfrastructureContainer}>
          <span className={styles.save1000sOfContainer1}>
            <span>{`Self serve infrastructure platform for `}</span>
            <span className={styles.scalingTeams}>scaling teams</span>
          </span>
        </div>
      </div>
      <div className={styles.frame40}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <img className={styles.maskGroupIcon1} alt="" src="/mask-group1.svg" />
        <div className={styles.texts3}>
          <div
            className={styles.headline}
          >{`Subscribe to Our Newsletter & get the Coupon code.`}</div>
          <div className={styles.paragraph2}>
            All your information is completely confidential
          </div>
        </div>
        <img className={styles.paperPlaneIcon} alt="" src="/paper-plane.svg" />
        <div className={styles.textfieldParent}>
          <div className={styles.textfield}>
            <div className={styles.bg} />
            <div className={styles.typeYourEmail}>Type your email</div>
            <img className={styles.icon3} alt="" src="/icon.svg" />
          </div>
          <img className={styles.textfieldIcon} alt="" src="/textfield.svg" />
          <div className={styles.subscribe}>Subscribe</div>
          <div className={styles.textfield1}>
            <div className={styles.frame41}>
              <div className={styles.typeYourEmail1}>Type your email</div>
            </div>
            <img className={styles.frameIcon4} alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild13} alt="" src="/icon.svg" />
        <div className={styles.frame42}>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        </div>
        <div className={styles.frame43}>
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        </div>
        <div className={styles.frame44}>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
        </div>
        <div className={styles.frame45}>
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        </div>
        <div className={styles.frame46}>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        </div>
        <div className={styles.frame47}>
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        </div>
        <div className={styles.frame48}>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
        </div>
        <div className={styles.frame49}>
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        </div>
      </div>
    </a>
  );
};

export default Home;
