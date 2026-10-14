# Prototype collection LAN preview

## Open in a browser

http://192.168.30.25:8788/

The collection now contains21 independently authored local prototypes: the accepted originalten plus eleven additions from user-selected references. Filters distinguish Explore/play5, Scenery/simplebrowsing5 and Newreferences11. Select Openprototype, thenbrowserBack toreturn. Openoneanimatedsiteatatime. No privateplanningfiles are served.

## Verified current status

- Elevennewruntimes selectivelystaged/assembled with --from-number11; originalten's97runtimefiles matchedpreservedSHA256hashes.
- ParentChromiumsmokeagainstactualLANURLs passed21/21: loadedfonts, nofailedinitialrequests orJavaScriptexceptions, nohorizontaloverflow at1440x900/390x844. Initialcheckincorrectlytreateddeferredlazyimagesasbroken; correctedtestdistinguisheslazyloadandalsoGET-verifiestheirURLs.
- Launcheractualclicks verified21entries/21links, filters5/5/11, openfirstprototype/browserBack andmobilewidth.
- verify_lan_expansion.cjs verified33actualnewcontact/readingstates:11new×desktop1440x900/mobile390x844/landscape844x390. ContentandLinkedInreachable, nopage/HTTPerrors orreading/documentwidthoverflow. Testsetupwas correctedtoopennativeadaptive menus, anddoesnotrejectintentionalvisiblearchitecturalheadingbleedthatstayswithinviewport.
- Exactevidence: lan-verification/results.json andlan-expansion-verification/results.json; executables verify_lan.cjs andverify_lan_expansion.cjs. Individual six-viewport/fullinteractionworkerproofs understudies/<slug>/.
- OriginaltenartacceptedbyVikH; theircontent/mobile independentreviewsandfinalclosurecompleted. Newelevencomparative full-design/mobile reviews pendingdeleg_81752228. EngineeringpassesareNOTnewaestheticapproval.
- PhysicalSafari/iPhone, sustainedhardwareperformance andlivehumaninputonaparticularphone remainuncertified. Userhasviewedandlikedoriginalten; no broadphysicaldevicecertificate inferred.
- No commits/publicpublishing/production/router/firewallchanges.

## Server and boundaries

Read-onlyserver binds192.168.30.25:8788 andserves preview/ONLY. Directorylistings,dotpathsandprivateplanningfilenames blocked. Studymetadata/reviewevidence/referencearchives are outsidepublicroot. No publicinternettunnel.

Activeparentprocess whencreated: proc_427b2143f18b / PID1266561. Persistentacrossagentturns, notinstalledasOSservice/bootjob. CheckURLbeforerestarting; avoidduplicateportlisteners.

Restartifstopped:

```
python -u /home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/serve_preview.py --bind 192.168.30.25 --port 8788
```

Selectiveexpansionassembly/checks, fromten-prototypesdirectory:

```
/home/trex/.hermes/hermes-agent/venv/bin/python assemble_preview.py --from-number 11
node verify_lan.cjs
node verify_lan_expansion.cjs
```

Use --only-slug <exactslug> forapprovednarrowcorrectionsandcombinewith --from-number11 topreserveoldtenhashguard. Allselectedruntimesstagebeforepublicreplacement; sourceuntouched. ExistingPlaywrightdependencyisread-only; no package/environmentchanges. Historicalfoldername ten-prototypes remains to keepstablepaths/serverconfiguration.
