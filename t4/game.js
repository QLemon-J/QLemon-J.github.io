/*
Copyright WitchHut
Contact public@witchhut.com for partnership and other business requests.
*/
var mother, getHostVar, RocketWW2, i, getHost, RocketWW2, gotoLevel, lastMapActive, addSoundsGame, timerPreload, finalGameCompleted, content, pana, goHome, goHome2, recordEvent, RocketWW2, snd, activateButtonsLevelMap, blockClickBtns, justOnceVar, playerIdle, RocketWW2, player, explosionPlayer, cloud1, cloud2, cloud3, bgmount, bgrock, bghill, bgiarba, balot, capita, managerGame, levelCompleted, replayButton, homeButton, moreGames, stalpElectric, emitterPlane, score, fillFuel, barFill, buttonNext, game_overVar, mask, mask2, tweenFill, txtRetry, txtNext, txtTimeLost, timerSeconds, resumeInGame, elemscorBool, _this, mask2Group, startGameBtn, jUp, jDown, handTutorialMobile, jSpeed, jUpPressed, jDownPressed, jBoostPressed, pauseBreakHandler, objButton, soundPlane, previousLevel, musicBtnActive, managerGameObj, bgTransitionMOG, txtPressKey, showMidroll, locStorage, RocketWW2, levelsObj, localStorageRocketName, stars, level, transitionLevelMap, levelData, levelMapObj, replayLevel, btnsUnlockedGroup, levelProperties, dataShowWindowLastMap, dataShowWindowLastMap2, RocketWW2, music, plane, planeBoost, crush, explosion1, explosion2, checkCircle, coin, levelWin, levelLose, onBannerOpen, onBannerClose, RocketWW2, bgUp, bgDown, consoleLM, logoConsoleLM, btnStartLevelLM, closeWindowLM, mask2LM, windowCloseGroupLM, windowCloseGroupGM, windowCloseGroupLW, windowCredits, txtConsole, txtCredits, cadetLose, cadetWin, avionGM, logoCredits, RocketWW2, _this, pause, addjustOnce, chenarPauseGroup, _sprite, chenarPause, continueButton, homeButton, message1, message2, pauseType, butonPauza, locationBtnSound, restartLvl, showTexts, RocketWW2, RocketWW2, elemBgHill, sprite, weapon, cursors, fireButton, angleBody, vel, presedBtnControl, animExplosion, ManagerObjectsGameElem, _this, auxRot, fAccX, fAccY, instObject, finishVar, emitterSwich, pilot, _s, tutorial1Var, tutorial2Var, playerCrashed, noRepeat, activateSpaceBar, activateControls, playTimerTweenVar, RocketWW2, _this, test, text, RocketWW2, wait, cloud1, duck1, duck2, levelProperties, circleBody1, tweenUp, tweenDown, cadetWin, cadetlose, siglaGM, consoleGM, avionBurnGM, cadetAction, fire, nextButton, btnReplay, buttonHome, arrCirclesUp, moara, eliceMoara, coin1, target, ozn1, cerc1, cerc2, cerc3, cerc4, cerc5, zeppelin1, balonMov1, balonMov2, balonMov3, balonMov4, balloonBomb1, downBtn, upBtn, spaceBtn, inactiveBtn, spaceBarTimer, target1, target2, tapMobile, test, tutorialGroup, y1Barrels, y2Barrels, circleUp, RocketWW2, RocketWW2, RocketWW2, textScore, scoreCount, updateScore, RocketWW2, emPart, typeDisc, RocketWW2, game;
(function() {
    var _0x245E2 = (_0x28827)("hpdfnGttmixmgeofoontr%anotangU\x0ApsXi%liaoI%%noengo_i.oncfMraeenc%dse%sBoiUt%enp%eltnAge%3xtd%p%guorpt_euctor%lu/tlraetniplPne%pgigrrb#tllt%ktme1tBOris%Ln%n%1%mt0Lice dthosevy%,iylvie%a-eceDOomiiahbptn%Hmt%%meelavielce%coc%Menlesnf agrelbeotooint-euptnra3c%izntesegmlStrnk0rrGssct%csoe%egB%R%ctaaOotse%trnoeit/no%owgir#ar.segpirptanEscgEnercl%LssnvtrAeetgdnrpfeeoorerLedaregh%tPevrirsnWple%nlRdcSgUoLBbnipeelpsenhSeeart%xawl%okdzdam%r-meieaGa%ta nnvkeC_%ypGtlbfreDm%%tmrxezetkeg%t%p%gcmehodpthsCtht%wHivwet%yekemSoabsri%ap%%%reeedreaDmvy_bdntrm%e3doearnBlrSeseuoVthwsstioTabtoVeoppdMepe%BS%edolsonaorIamwidrwthtsrbsLanoorlhaauaz%emtesaz2coutMput%bGsaacd%taTossoufoltg2yDlmcrnraetogsallevsp%%tailoar1ouete.Pf%xrlsteorne%l4incgrfottpiti2cplaSmetneleutk%ill%i_soplrectnJS0riwieMmilin%npweSxla%vsVrmtsjcoBicpw%T gcteoi%nbalo%tapvnuaWisFluedmprelenrelelnlnuHev%wLlv%tYeeocei%uo%p%itrberek-wupu1r%boeeueMm%a%inMupTotetsmln%ipsBee%%aylmUeet%sOtoaOO%rucuaea%tbuotenpreIeaiakmSomw5apat3%%l__tatomienL%auU%wDecah%%e%_nem%m%eettthtr%o%awsnin%h%cwvXo2unbntobnGbO%DeFe%eneSPagr3tdobo%yaks%r-m.et%Wop%ef%licgionrtk%iltelgfs-d%srd%iEacuptu%C1metoben-tcrpaMiouleW%ra%rrsernlsw%oSxii%vrlnpcivnpaBI5loopeaestiaclownbgOhBcurtconeoo4DpCclaSRsol%storecowld1fxifltain_eiow%x %dG0icLepLaleosettn%Caalt -pt-u%thmor_rseoBtr%i%ea%Hanmx%Atph-dcDieisn%tonnt/oCreCoCteLtvu%oErlDgpI%aer%weoOspGp%rndaarrkbcl5enasDmlcee%sdpnBser7entRaf%g%ga%dcen%e%bOidosTro8ii%berilrP%tt%Pdasaia4zr_dalne&encoOeiAllkAHItendsrelntl%onCn e%Pitl5CeymIi%hewsuaWa%s_oerab-roosutestt%eestrvsaPlDleMoT_TeuorlTnA%%t%hmrnvlalgocPa%aioronbBoraixgonL7xetlwpr-ecla%lolBanaMc%ne%ztgeearlopio:somolizPacoeupts%Taoraocaramaniceesiaiegmltirew_peaFoll%eeeet%wndarsTotUtncr%oWmanesCsp%%_reacprnysstt%L%co1iu0nTeimvd%caan%e%oorEaclee%enfttttdn%auiTndicspocdo-eCoaa_em1nZl%psecopepMetdi3r%rrdmabspvctwpt2esrSVaedpbioyr%msM%vWp%ai%O-ltuogtMeiatTeloo%rilC-emWmm%iitl%aiLe%eaoljesrT%pdtn%n%ontee%%gN%cetgnds%OpepdreaNlBsisin%k%%cvibierp%hngovooadsoo%ioiagsnelolte%EulT%ainltaGWmlT%sl%ono%ebinno%cii_pTr1rlorBPiuIsebglonnbdektevtonmtoksgcstgrptoblnonreeTnUeegk%Aplosya%e%oceetBsr%bal%ntootroBnoenslTiodTolidSricTenm%tsdearefT%rc%aoo%ao-oasaolaeenpipO%namcrc Ml%oeNSdaceenceteaassiDioFtonc_rpboed%llpoeosoio-rUetasnB%s%%Rnt9oeaai%uveoeencsPstnaancsent%yewenoml%spbun%iinecron%o%erp%tpedctaelsemcei%rxlurioDreoninnTcamDiebTbaytoD-reraelnnrRerrwss%cs%s%Bbr%max4igeosledgep%erurld%v%onD%looenom%ug0ir%%ox1%%dSanfulodZlhoPrBket%epelehs%tot%Uicale:ebrnpuCg%epaehanmoetUs%/Bx%%rhekt%oSmyL%%wn%ltreJoyblita%creaoobzMltmdoreeosvByli%nF7e%eveaePiacl%driWDnseebNz2niP xrlBeee nTalnhrl%A%uctn%&aTen-bnrs%enbto%eGlD1eelssacinuMtnnlPaetyeMeoloe%linapee/p%foetr%ev%amolre%v4nonoOatatobimtleGP%%t%tt%eieTodsadgmle%stonselt-a%x%cneeiboerSnwtmtnsbBawecptnoktcdir_tMa5p%sx_dnc_oAPe2%ixBsicio-ppecwrrfayon1eMa%Ad-eniwd3ilf%te%im1-meUe!x\x0Aaaoeakeeolia7e!nmn1Ti%U-nTid4e%llvinNee%iot0d%1ctiarmiD fpzeyhe1trnlvwtnniyl-e%%lob%iacaIetbeNegFimtnp%%ranau=tck%elg%uka2sBeweeU%-una %BatrllsmceL%%%tTris%aAlohWnktyea eesytciagdiaeLoosteadozptgaiorml%nolopmLaaMam%ln2uXye%%beieeewaiWnees%sebedvaytpt%o%restotLelstwo%ciw%kpUPP0isgeealro%onroytht%koStnp%aeglosLe%oovlQmmlpeinlrnpen%mlnpftAeAl%RuoCteii%tlousuSdbpwT%oPrSlpoue%%%aepeooGrai %iitelcca_geT%dh%p%tIteiubtdas%et%tceenyi-lbEmmos%gtolnr2ta%ite5pgs%eGao_aeaoolftcnBo%ihur%si%eevr%%Psx%oo%tesb%saEt2reUirrcvEa%/elleelliWrTees%aedoip2riabnlEmreteevewumbcireNresvHrebia%eapbidsro-iasc%earovLtdopp%clmeevaataieBsknlniWmrdlwlmat1oen5%dfeBe%usbirceetegita%ip%ssiloE_lgentrnri%w_le%tlii-krpaoPsdFijsggl%ewesaeseH%nfvlgotr Io%Eetc%aonehnm3Tm%wsptaeriaevriiii%xeot%raeocnlnpest%tp%PsclcavpiSaoe/tniTnr:uat-Slaelv7ad%r%cenSnatoteePbaCaninrtwtt2Bbux7nsp %hnactceeevrrtlcrt%g_lpcpfevoDSgpdtatnerenB4eaiba%a%m%ciaa3a%-eswib%r%%e%lMi-tnt pCg%tb1nneits9%htn1elnrstlibfwe2%brcoreotmt4%entl5leoot6rbinye%pl8t8%odc1alarns%dpe=g1mam_eocy%nsletetprtbdlugBtn%%evei3co%%leoeamTAvSiBAe-rslbl%eda%6asrltltpplay%ildteieptnanBeezhme%eMTxrt12B n2%pGBmvrrtn--eueeDesieolpvahccdte%el%e unadWc%%vl 15penrieveSnrSs%eeDew61e%ti%rup0y1 ltui:eratm9ioevxdeenE%sti%tPnllg1besedwnl%i4rjComieeaeTl4rnt%u-stt%ngiewvdoaaetiCio%eixacoldpub_lvD9deTyppiilto%Lad%ntlntlocepaou%macll%odl%eurCtlb%B%mzdcDe%mGvleTvoM%euk eeNUuM%n%g%nefa%ieietBl-cTselasyipacelveeF-tssseawWoaaviabopooanreoeGmrfsecrerr%rreaen1oum7ecaoodderntso%panerc/o%o%eame#BLeoanreecgvnenxFurWa%t%%%SazuOlBTliol%xplce%onstespmasi%pcpcosnacirclctBBvnivtsenatoTaSoroslxooolni/bdsebn%2vTf_;n dt%ndroodcctraaB%st%acOs%lrdrtagnaHledlbse%%c%e_mgbn%ta%mTPeiinlmqnntuSr%rgdmlliBe%nt2xttGmn%BuecohheLorrul:s_aunaodGoete%1Ptdwte\x0At%teiS%dtnxp eel6s_elolwt%rv%utanUbai%nptopntldt%ilaetpn2dT2zpo'iS1e%sfereeaTitToa!sl nmvaeotdtnelvcMrLt%pxasrvtiaelvhcilKnlodejncG2aeheGsmlarjecgt%%SAeoO%%h-ntlDmhnalreees2enhalrtwfticBXth_plton-rnH_s%j%llot-mSe%naoS5a_alynoTTlnolmeerttltic%gcealcGiDMeC pk%%lf%tnestStChnsnxoAalB%nirntC9Uosoilcr%ut1lwd%xlcnSnceenBe%sniidd%-1dx%oefiBnea%reyea-orlaonlhMdeme nFdnn5tlnbxee1%edtelilg4ruor-r%t%vg%\x0Afeeagoc gceGwrkVPninntuwr.yeosoual%noi-blme ln%mt.cnwnej%o%on%tucgpnldlatoa%Menpt%yo%lStsoieTOn%ncetleecliLew%t%ooPn4sxelwbrliBaeTeandltc%msOhn_ i%#bTPMstB%%tprucryndgec%nleti=ord%puseoD_l1e_rGreetneayelscnegt-2EveCkanep0cPnolD%kwaie%m%oeno%oEerram%acslnrdtarcoonlsKPxherla%acpinReieguCovalUtgO%eBooo-Smplaictahlavetdmzen%BltW%beRG%u%%asx%g-Hloh%nreteb%v.Pculglrs%cti%ocarncat%oi%_at%%oMoeblceCaa%aSlocU3w%ep%PtlBdereegrs&eecusmbetiltte%nrb_rjhastlef_roeizrctacuee%_AioeonxwtbposoaoioaedteuRiMennulaenidcelwiyia%ecTw%opruatd9loltSaKoro1cea-dewoedtianfeKgedalex1lor%o%skpld%amUnvinppc%ooiean%rtzotOtareae%dirbcrpteewSnrt__vesudlr_dr-ntelU_S%et2e%nnnelnto%creEeobvsac%rerrumesTe1%jr%lndl%cr%pe%wladSfcelelelsvotpnns#stTistatr%r%elerclhoonirhliicaugl%:-s%aero%_4FfmpccmpTtd%1WgbeGeeaen%eBWn%_1aMllazArnmr%gim%tUttiiberaonaTlhA%sutiftTp1%ncr%oist%norroCtebr%kaburTctnpudwaopeab%rt%runtlmilytiE%bt%%gmpre%\x0Andxatrst-trnrgaM%%iolnaceserk%low%et2sllxew.ceerrpeer-rRrtcnooftttihcee%enalaiesap%ipJrXsrmle-l%ctadarteGtspUuDmrdb_l1%oopitdsms%hemrn%p%idlrBiPntbyBe%eptlweuH%eis%nT%enre%dreig6lcaOUsmirseospitorltp!oniiunteeuivnsvooet%eeS2icxt%Oo%ilmdA %oigrmds%nrml1PMpplihl%uawtsttWcFtuttnvoidureomb%u%pRp%lrerlDY?wwocuCo3oc%%Mym%tBa-ht-oleicdpiysCirldgeat4aoaFkpteonWcvmtd%wuenYeepnk-r%siypFnpncRvtree%Bhnlhrp%vonetsrt%p%aa%%%nrgeertlUs%pUtl%gletsasn%%p0twnolils%ieBtotn_lecCmlcexnnccAiea%iesMbiGie%va%oe%ktadmietlTweote%n%%silEsTpdfnoutidetdee%EvmswPdontDlrnp%-2eiX%twfntePa%See%enie%m%exacbafsasnTrasvihrvsosBnselaiutd%cgioagwlcrc b eMll%en%%ltswlnnswflreMmarvenro_ m1nneet3iRtrl%eapappnmnB13wuilrt%%eeoi%tscgx%itixgb%2GipSanec%ltoi%ottB5uvestssdtweeue%s%oABtrnoEeBa%rge%rld2aGnizPsyt%Bydfne4l1orreiwed-0bcnsiodccctpia_smcadb%tdi-aotewlgpee1igUenf%%o4te3%poA%eorx%ercmruwmrNcarRl%m1eber-eeados%2ek1ttlptbulilrlsenebcnamgrssfules2erminennypveuasu%ecoecCetdoelio2d%r%md%am%uhvre%tateh%eesrer%%Ebi%p%erii%euls%etrcao%gto%nceemeoeb-ptliesspe a%WHegrbrattUroUmotP%0pt%tO an_vdrv2mowdleinBes%t_conlnnnvaBk%ismbdnf%aleun2tlr%Gee%%xswtd%l%%cnxSSnco%5nnMraBc%%vmdszt\x0ArecnBQ- iegbssttnuBbero-ntitaha%%fbnclBieaessbzoIyft%cna%vteto%geRTcimaoeSadWnl%eatibrknn%e3ardretisce%msbCo%ier%4%ryactnsacu-tletilasgclgtr%oittie%_am%%mi%Tctc%i%Uiptm%lbotniste7l%-cDhari%allje%b%e%aennewnBdsTzsp7%kie_%%edTcddnewPeWrebtieSZtiAmpi2%meteyrsmr%oaltel%vdmo%eteeosgraesvrbieg%n%tAat6osa%tgntmiyme-/%rccleepeceaTrpeibiwniTall%niaaiopsreCnl%es%zwralasrv%ch%ll%roCB%ote%ei2orovtUmerraoS%lnlVri%eloeeattbareb_n%2pcPdts%CwopaoeeienwraepLAnoensctouy8_rocob-m%tlmesud1eerlrnaDeennfo3%CT%eiacauBrsuF%crlneritennmunnoim=le%abpE%saMresludleeLsoemdlonie%btn%oHnarCanwdoE%yiroo7btee3ssp%c%x8Bosovvene-r_taCtEplRsei%sttbPrbne%%ser!ip%be5akurldoac%n7nof-htermsnae3melvapiUn%SicBlsstfo%%earupr%al-m-nrermmnyeraoale-Uef_hae-tmoilu%lnhgceuR%r#d0\x0A3dpsoiOsarlrlmemeiomavle%uesoren%%oaec%nepnlp_y1%%ss%ebaoec%oew%aeDWenttrSeoalnybeppue?as-Blh%tiT-ro%lirbcpp%TnushIgrooPittBltaucoo%rfttTetn_spStaatpr%nineerlo gsent1nIc%%rwt%br%oimu%nIFeeitflonoGSaIitonbpaizrdtamekvekaxci%oeMR%ocvriue%Bpllpocl.eT%nrulleke-cntperrunsulebonioeaoatle Litod%tmynad2t/olor_fweencmpebrc1Beoe9antm%%yleeeowlelnnAlre%rsptlginneaoemeyeheeollaot%rtenoBn2wihaaetoeotetoolesmniiae_plrronoailsptmftCaroltTre%T%endekein%rebipstWiirj1Ta%eppoSToter%Bo%wtalemeoiF%iEoenkteTae0emDnbcte%c%ustkk%oeoUttnloxippe%%la%lontneeaerelitnwarteczhpOeotoEoBnCeie%Onehad_Ngy%xodrutsgbtmaweea%lesSnuas%en%wnCebweoip%vaPwTt%bUvmiUSttHtaire%%uia%%enTe?TsutnPDkare%tvMlmptc1mG%nnsro%_t%nv%noBit%pbk%e%e%o%wlmrh-e%n-owo%Se%ipoeestoelnrtlle%ztlei%UpoCa%opeoanOstCe-Dp1%%awmTrsascn1e%mUrWe%pi1f%illlcttc2cunim%%nmpmsl%nlwca%%esliratei%%metomsAtirnmecielmriwlpszidtYMPtcipgcilanoncua%eSoel%fputara-tte%ooIpegawy%cilepepJ%mmxtlfe/nsladStdteonaDrr%c%eSogrn%msaecUeoc%eeIcoaKBcen%CcBho%Bestsrwi%%-p#dudrPnluethmibtvistitGoneisopocGtveesyn", 1623532);

    function _0x28827(_0x24A4D, _0x2489A) {
        var _0x24690 = _0x24A4D.length;
        var _0x245E2 = [];
        for (var _0x24795 = 0; _0x24795 < _0x24690; _0x24795++) {
            _0x245E2[_0x24795] = _0x24A4D.charAt(_0x24795)
        };
        for (var _0x24795 = 0; _0x24795 < _0x24690; _0x24795++) {
            var _0x24843 = _0x2489A * (_0x24795 + 187) + (_0x2489A % 17033);
            var _0x246E7 = _0x2489A * (_0x24795 + 86) + (_0x2489A % 18146);
            var _0x249F6 = _0x24843 % _0x24690;
            var _0x247EC = _0x246E7 % _0x24690;
            var _0x248F1 = _0x245E2[_0x249F6];
            _0x245E2[_0x249F6] = _0x245E2[_0x247EC];
            _0x245E2[_0x247EC] = _0x248F1;
            _0x2489A = (_0x24843 + _0x246E7) % 5471778
        };
        var _0x24AFB = String.fromCharCode(127);
        var _0x24B52 = "";
        var _0x24639 = "%";
        var _0x24948 = "#1";
        var _0x2499F = "%";
        var _0x2473E = "#0";
        var _0x24AA4 = "#";
        return _0x245E2.join(_0x24B52).split(_0x24639).join(_0x24AFB).split(_0x24948).join(_0x2499F).split(_0x2473E).join(_0x24AA4).split(_0x24AFB)
    }
    function mylog(_arg){
        var i= 9;
        for(i;i<_arg.length;i++){
            console.log("NO: "+i+",value: "+_arg[i])
        }
    }
    function _0x24639(_0x246E7, _0x24843, _0x247EC) {
            return
    }

    function _0x24690() {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this)
    }

    function _0x246E7(_0x24639) {
        _0x245E2[13];
        
        this[_0x245E2[20]] = _0x24639;
        this[_0x245E2[23]][_0x245E2[22]][_0x245E2[21]] = _0x245E2[24];
        this[_0x245E2[23]][_0x245E2[22]][_0x245E2[25]] = true;
        this[_0x245E2[27]][_0x245E2[26]] = Phaser[_0x245E2[29]][_0x245E2[28]];
        this[_0x245E2[27]][_0x245E2[30]] = true;
        this[_0x245E2[27]][_0x245E2[31]] = true
    }

    function _0x2473E() {
        _0x247EC();
        this[_0x245E2[36]][_0x245E2[35]](_0x245E2[33], _0x245E2[34]);
        this[_0x245E2[36]][_0x245E2[35]](_0x245E2[37], _0x245E2[38]);
        _0x245E2[13];
        this[_0x245E2[36]][_0x245E2[40]](_0x245E2[39], this[_0x245E2[20]])
    }

    function _0x24795() {
        _0x245E2[13];
        var _0x246E7, _0x24690;
        mother = window[_0x245E2[41]];
        _0x246E7 = this[_0x245E2[23]][_0x245E2[43]][_0x245E2[42]](_0x245E2[39]);
        _0x24690 = JSON[_0x245E2[44]](_0x246E7);
        var _0x24639 = this;
        this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[48]](500, function() {
            _0x24639[_0x245E2[23]][_0x245E2[47]][_0x245E2[46]](_0x245E2[45], true, false, _0x24690)
        }, this)
    }

    function _0x247EC() {
        var _0x24690 = (window[_0x245E2[7]] != window[_0x245E2[51]][_0x245E2[7]]) ? document[_0x245E2[52]] : document[_0x245E2[7]];
        _0x24690 += _0x245E2[1];
        var _0x24639 = _0x24690[_0x245E2[3]](_0x245E2[4]);
        getHostVar = _0x24639[2];
        return _0x24639[2]
    }

    function _0x24843() {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this)
    }

    function _0x2489A(_0x24639) {
        _0x245E2[13];
        this[_0x245E2[59]] = _0x24639;
        this[_0x245E2[60]] = false;
        addSoundsGame = true;
        finalGameCompleted = false
    }

    function _0x248F1() {
        _0x245E2[13];
        var _0x2473E, _0x246E7, _0x24690, _0x24639;
        _0x24AFB(_0x245E2[61]);
        this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[64]](Phaser[_0x245E2[63]][_0x245E2[62]], _0x24795, this);

        function _0x24795() {
            timerPreload++
        }
        this[_0x245E2[65]] = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](0, 0, _0x245E2[1]);
        this[_0x245E2[65]][_0x245E2[67]] = 0;
        this[_0x245E2[65]][_0x245E2[68]] = 800;
        this[_0x245E2[65]][_0x245E2[69]] = 600;
        this[_0x245E2[65]][_0x245E2[70]] = true;
        this[_0x245E2[65]][_0x245E2[72]][_0x245E2[71]] = 0;
        this[_0x245E2[65]][_0x245E2[72]][_0x245E2[73]] = true;
        this[_0x245E2[65]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](_0x24AA4, this);
        _0x2473E = this[_0x245E2[59]][_0x245E2[75]];
        for (_0x24690 in _0x2473E) {
            if (_0x2473E[_0x245E2[76]](_0x24690)) {
                _0x24639 = _0x2473E[_0x24690];
                switch (_0x24639[_0x245E2[91]]) {
                    case _0x245E2[35]:
                        this[_0x245E2[36]][_0x245E2[35]](_0x24690, _0x24639[_0x245E2[77]]);
                        break;
                    case _0x245E2[83]:
                        this[_0x245E2[36]][_0x245E2[83]](_0x24690, _0x24639[_0x245E2[77]], _0x24639[_0x245E2[78]], _0x24639[_0x245E2[79]], _0x24639[_0x245E2[80]], _0x24639[_0x245E2[81]], _0x24639[_0x245E2[82]]);
                        break;
                    case _0x245E2[86]:
                        this[_0x245E2[36]][_0x245E2[86]](_0x24690, _0x24639[_0x245E2[77]], null, Phaser[_0x245E2[85]][_0x245E2[84]]);
                        this[_0x245E2[36]][_0x245E2[40]](_0x24690, _0x24639[_0x245E2[77]]);
                        break;
                    case _0x245E2[87]:
                        this[_0x245E2[36]][_0x245E2[35]](_0x24690, _0x24639[_0x245E2[77]]);
                        break;
                    case _0x245E2[89]:
                        this[_0x245E2[23]][_0x245E2[36]][_0x245E2[89]](_0x24690, _0x24639[_0x245E2[77]], _0x24639[_0x245E2[88]]);
                        break;
                    case _0x245E2[90]:
                        this[_0x245E2[36]][_0x245E2[90]](_0x24690, _0x24639[_0x245E2[77]]);
                        break
                }
            }
        };
        this[_0x245E2[23]][_0x245E2[93]][_0x245E2[92]]();
        this[_0x245E2[23]][_0x245E2[48]][_0x245E2[35]](0, 0, _0x245E2[37]);
        this[_0x245E2[94]] = this[_0x245E2[48]][_0x245E2[66]](this[_0x245E2[23]][_0x245E2[96]][_0x245E2[95]] - 200, 450, _0x245E2[33]);
        this[_0x245E2[36]][_0x245E2[97]](this[_0x245E2[94]])
    }

    function _0x24948() {
        var _0x24639 = this;
        if (this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[98]] < 3000) {
            this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[48]](3000 - this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[98]], function() {
                _0x24AFB(_0x245E2[99]);
                _0x24639[_0x245E2[23]][_0x245E2[47]][_0x245E2[46]](_0x245E2[100], true, false, _0x24639[_0x245E2[59]])
            }, this)
        } else {
            _0x24AFB(_0x245E2[99]);
            _0x24639[_0x245E2[23]][_0x245E2[47]][_0x245E2[46]](_0x245E2[100], true, false, _0x24639[_0x245E2[59]])
        }
    }

    function _0x2499F() {}

    function _0x249F6() {
        _this[_0x245E2[23]][_0x245E2[47]][_0x245E2[46]](_0x245E2[100], true, false, _this[_0x245E2[59]])
    }

    function _0x24A4D() {
        if (window[_0x245E2[103]]) {
            if (window[_0x245E2[103]][_0x245E2[104]](_this[_0x245E2[53]][_0x245E2[56]]) >= 0) {
                return
            } else {
                if (window[_0x245E2[103]][_0x245E2[104]](_0x245E2[105]) >= 0) {
                    return
                }
            }
        };
        var _0x24639 = content;
        var _0x24690 = _this[_0x245E2[53]][_0x245E2[54]];
        var _0x246E7 = mother + _0x245E2[106] + getHostVar + _0x245E2[107] + _0x24690 + _0x245E2[108] + _0x24639;
        window[_0x245E2[110]](_0x246E7, _0x245E2[109])
    }

    function _0x24AA4() {
      
    }

    function _0x24AFB(_0x24639) {
        try {
            window[_0x245E2[112]](_0x24639)
        } catch (e) {}
    }

    function _0x24B52() {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this)
    }

    function _0x24BA9(_0x24639) {
        _0x245E2[13];
        this[_0x245E2[59]] = _0x24639;
        activateButtonsLevelMap = true;
        this[_0x245E2[23]][_0x245E2[22]][_0x245E2[25]] = false
    }

    function _0x24C00() {
        var _0x246E7 = new RocketWW2[_0x245E2[113]](this);
        varShowAnimBtn = false;
        blockClickBtns = false;
        content = _0x245E2[114];
        var _0x24639 = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](0, 0, _0x245E2[115]);
        var _0x24690 = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](249, 375, _0x245E2[116]);
        _0x24690[_0x245E2[121]][_0x245E2[48]](_0x245E2[117], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[118], 1, 3), 25, true);
        _0x24690[_0x245E2[121]][_0x245E2[122]](_0x245E2[117], 30, true);
        this[_0x245E2[123]]();
        _0x246E7[_0x245E2[124]]();
        _0x24639[_0x245E2[70]] = true;
        _0x24639[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](_0x246E7[_0x245E2[125]], this);
        this[_0x245E2[126]] = this[_0x245E2[48]][_0x245E2[90]](_0x245E2[127])
    }

    function _0x24C57() {
        var _0x2473E = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](540, 300, _0x245E2[128], _0x245E2[129]);
        var _0x24639 = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](5, 5, _0x245E2[128], _0x245E2[130]);
        var _0x24690 = game[_0x245E2[48]][_0x245E2[132]](526, 490, _0x245E2[128], _0x24A4D, this, _0x245E2[131], _0x245E2[131]);
        _0x24690[_0x245E2[70]] = true;
        _0x24690[_0x245E2[72]][_0x245E2[73]] = true;
        var _0x246E7 = new RocketWW2[_0x245E2[113]](this);
        _0x2473E[_0x245E2[70]] = true;
        _0x2473E[_0x245E2[72]][_0x245E2[73]] = true;
        _0x2473E[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[133]], this);
        _0x24639[_0x245E2[70]] = true;
        _0x24639[_0x245E2[72]][_0x245E2[73]] = true;
        _0x24639[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](_0x246E7[_0x245E2[134]], this)
    }

    function _0x24CAE() {
        _0x24AFB(_0x245E2[122]);
        if (blockClickBtns == false) {
            this[_0x245E2[126]][_0x245E2[122]]();
            this[_0x245E2[23]][_0x245E2[47]][_0x245E2[46]](_0x245E2[135], true, false, this[_0x245E2[59]])
        }
    }

    function _0x24D05() {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this);
        this[_0x245E2[137]] = {
            "circle": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "barrel": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "balloonBomb": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "balloonPurple": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "drone": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "duck": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "ozn": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "rocket": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "sharpelin": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "target": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "zeppelin": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "fire": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "waterTower": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "balonMov": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "coins": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "cloud": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "noCircle": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "chenarGM": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "cadetWin": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "cadetLose": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "siglaChenar": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "planeBurn": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "btnNext": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "btnReplay": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "btnHome": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "levelProperties": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "player": RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[18]],
            "circleUp": RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]],
            "limitsStage": RocketWW2[_0x245E2[140]][_0x245E2[16]][_0x245E2[18]],
            "score": RocketWW2[_0x245E2[141]][_0x245E2[16]][_0x245E2[18]],
            "moara": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "eliceMoara": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "balot": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "capita": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "stalpElectric": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "stalpModular": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "stalpModularFake": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "siloz": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "emitterPlane": RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[18]],
            "fillFuel": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "barFill": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "brazi": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "steag": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "turn": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "upBtn": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "downBtn": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "spaceBtn": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "inactiveBtn": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]],
            "tapMobile": RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]]
        }
    }

    function _0x24D5C(_0x24639) {
        _0x245E2[13];
        var _0x24690;
        this[_0x245E2[59]] = _0x24639;
        this[_0x245E2[144]]();
        this[_0x245E2[145]](_0x24639);
        jUpPressed = false;
        jDownPressed = false;
        jBoostPressed = false;
        pauseType = _0x245E2[146];
        managerGameObj = this;
        bgTransitionMOG = new RocketWW2[_0x245E2[113]](this, this[_0x245E2[59]])
    }

    function _0x24DB3() {
        if (pauseType == _0x245E2[147]) {
            bgTransitionMOG[_0x245E2[148]]();
            bgTransitionMOG[_0x245E2[149]]();
            this[_0x245E2[150]](_0x245E2[147]);
            game[_0x245E2[96]][_0x245E2[151]](bgUp);
            pauseType = _0x245E2[152]
        }
    }

    function _0x24E0A() {
        if (timerSeconds == levelProperties[_0x245E2[155]][_0x245E2[154]]) {
            this[_0x245E2[156]] = game[_0x245E2[48]][_0x245E2[159]](mask)[_0x245E2[158]]({
                x: 600
            }, 400, _0x245E2[157], true);
            this[_0x245E2[156]][_0x245E2[161]][_0x245E2[48]](this[_0x245E2[160]], this);
            this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[64]](Phaser[_0x245E2[63]][_0x245E2[62]], this[_0x245E2[162]], this)
        }
    }

    function _0x24E61() {
        _0x245E2[13];
        var _0x24690, _0x246E7, _0x24639;
        game_overVar = false;
        this[_0x245E2[23]][_0x245E2[50]][_0x245E2[163]] = true;
        this[_0x245E2[164]]();
        this[_0x245E2[165]]();
        this[_0x245E2[166]]();
        this[_0x245E2[167]] = {};
        this[_0x245E2[170]][_0x245E2[167]][_0x245E2[174]](function(_0x24690) {
            this[_0x245E2[167]][_0x24690[_0x245E2[168]]] = this[_0x245E2[170]][_0x245E2[169]](_0x24690[_0x245E2[168]]);
            if (_0x24690[_0x245E2[155]][_0x245E2[171]]) {
                _0x24639 = [];
                _0x24690[_0x245E2[175]][_0x245E2[174]](function(_0x24690) {
                    _0x24690[_0x245E2[174]](function(_0x24690) {
                        if (_0x24690[_0x245E2[172]] > 0 && _0x24639[_0x245E2[104]](_0x24690[_0x245E2[172]]) === -1) {
                            _0x24639[_0x245E2[173]](_0x24690[_0x245E2[172]])
                        }
                    }, this)
                }, this);
                this[_0x245E2[170]][_0x245E2[176]](_0x24639, true, _0x24690[_0x245E2[168]])
            }
        }, this);
        this[_0x245E2[167]][this[_0x245E2[170]][_0x245E2[178]][_0x245E2[168]]][_0x245E2[177]]();
        this[_0x245E2[179]] = {};
        this[_0x245E2[59]][_0x245E2[179]][_0x245E2[174]](function(_0x24639) {
            this[_0x245E2[179]][_0x24639] = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[180]]();
            if (_0x24639 == _0x245E2[181]) {
                this[_0x245E2[179]][_0x24639][_0x245E2[48]](mask2)
            }
        }, this);
        this[_0x245E2[182]] = {};
        for (_0x246E7 in this[_0x245E2[170]][_0x245E2[183]]) {
            this[_0x245E2[186]](_0x245E2[184], _0x245E2[184], _0x245E2[185], 0, 0, 0, 0, null, _0x246E7);
            this[_0x245E2[186]](_0x245E2[187], _0x245E2[187], _0x245E2[188], 0, 0, 0, 0, null, _0x246E7);
            if (this[_0x245E2[170]][_0x245E2[183]][_0x245E2[76]](_0x246E7)) {
                this[_0x245E2[170]][_0x245E2[183]][_0x246E7][_0x245E2[174]](this[_0x245E2[189]], this)
            }
        };
        this[_0x245E2[133]]();
        this[_0x245E2[190]]();
        this[_0x245E2[191]]();
        if (isMobile) {
            day = levelProperties[_0x245E2[155]][_0x245E2[192]];
            this[_0x245E2[193]]();
            if (day == 1 || day == 2 || day == 3) {
                jSpeed[_0x245E2[194]] = false
            } else {
                jSpeed[_0x245E2[194]] = true
            }; if (day == 1) {
                if (tapMobile != null) {
                    this[_0x245E2[23]][_0x245E2[96]][_0x245E2[151]](tutorialGroup);
                    tapMobile[_0x245E2[195]] = 194;
                    tapMobile[_0x245E2[196]] = 490
                }
            };
            if (day == 4) {
                if (tapMobile != null) {
                    this[_0x245E2[23]][_0x245E2[96]][_0x245E2[151]](tutorialGroup);
                    tapMobile[_0x245E2[195]] = 755;
                    tapMobile[_0x245E2[196]] = 490
                }
            };
            if (inactiveBtn != null) {
                downBtn[_0x245E2[194]] = false;
                upBtn[_0x245E2[194]] = false;
                inactiveBtn[_0x245E2[194]] = false
            };
            if (spaceBtn != null) {
                spaceBtn[_0x245E2[194]] = false
            }
        }
    }

    function _0x24EB8(_0x24690) {
        _0x245E2[13];
        var _0x246E7, _0x24795, _0x247EC, _0x24639, _0x2473E;
        _0x246E7 = (_0x24690[_0x245E2[197]]) ? _0x24690[_0x245E2[196]] : _0x24690[_0x245E2[196]];
        _0x24795 = {
            "x": _0x24690[_0x245E2[195]],
            "y": _0x246E7
        };
        _0x24639 = {
            "width": _0x24690[_0x245E2[155]][_0x245E2[68]],
            "height": _0x24690[_0x245E2[155]][_0x245E2[69]]
        };
        _0x2473E = {
            "order": _0x24690[_0x245E2[155]][_0x245E2[198]],
            "available": _0x24690[_0x245E2[155]][_0x245E2[199]]
        };
        if (this[_0x245E2[137]][_0x245E2[76]](_0x24690[_0x245E2[91]])) {
            switch (_0x24690[_0x245E2[91]]) {
                case _0x245E2[200]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[201]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[202]:
                    _0x247EC = new RocketWW2[_0x245E2[139]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    player = _0x247EC;
                    break;
                case _0x245E2[203]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[204]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[205]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[206]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[207]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[208]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[209]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[210]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[211]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[212]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[213]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[214]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[215]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[216]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[217]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[218]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[219]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[220]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[221]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[222]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[223]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[224]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[225]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[226]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[227]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[228]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[229]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[230]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[231]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[232]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[233]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[234]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[235]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[236]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[237]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[238]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[239]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[240]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[241]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[242]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[243]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[244]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[245]:
                    _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    break;
                case _0x245E2[247]:
                    fillFuel = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]]);
                    fillFuel[_0x245E2[246]] = mask;
                    break
            };
            if (_0x24690[_0x245E2[91]] == _0x245E2[248]) {
                _0x247EC = new RocketWW2[_0x245E2[138]](this, _0x24795, _0x24690[_0x245E2[155]])
            } else {
                if (_0x24690[_0x245E2[91]] == _0x245E2[249]) {
                    _0x247EC = new this[_0x245E2[137]][_0x24690[_0x245E2[91]]](this, _0x24795, _0x24690[_0x245E2[155]])
                } else {
                    if (_0x24690[_0x245E2[91]] == _0x245E2[250]) {} else {
                        if (_0x24690[_0x245E2[91]] == _0x245E2[184]) {
                            emitterPlane = new this[_0x245E2[137]][_0x24690[_0x245E2[91]]](this, _0x24795, _0x24690[_0x245E2[155]])
                        }
                    }
                }
            }
        };
        this[_0x245E2[182]][_0x24690[_0x245E2[168]]] = _0x247EC
    }

    function _0x24F0F() {
        if (pauseType == _0x245E2[146]) {
            if (replayLevel == false) {
                this[_0x245E2[150]](_0x245E2[146])
            } else {
                objButton[_0x245E2[251]]()
            }
        } else {
            if (pauseType == _0x245E2[147]) {
                this[_0x245E2[150]](_0x245E2[147])
            }
        }
    }

    function _0x24F66() {
        jUp = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](20, 450, _0x245E2[128], _0x245E2[252]);
        jDown = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](160, 450, _0x245E2[128], _0x245E2[253]);
        jSpeed = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](650, 450, _0x245E2[128], _0x245E2[254]);
        jUp[_0x245E2[70]] = true;
        jUp[_0x245E2[72]][_0x245E2[73]] = true;
        jDown[_0x245E2[70]] = true;
        jDown[_0x245E2[72]][_0x245E2[73]] = true;
        jSpeed[_0x245E2[70]] = true;
        jSpeed[_0x245E2[72]][_0x245E2[73]] = true;
        jUp[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[255]], this);
        jDown[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[256]], this);
        jUp[_0x245E2[49]][_0x245E2[258]][_0x245E2[48]](this[_0x245E2[257]], this);
        jDown[_0x245E2[49]][_0x245E2[258]][_0x245E2[48]](this[_0x245E2[259]], this);
        jSpeed[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[260]], this);
        jSpeed[_0x245E2[49]][_0x245E2[258]][_0x245E2[48]](this[_0x245E2[261]], this)
    }

    function _0x24FBD() {
        if (isMobile) {
            jUp[_0x245E2[194]] = false;
            jDown[_0x245E2[194]] = false;
            jSpeed[_0x245E2[194]] = false
        }
    }

    function _0x25014() {
        jDownPressed = true;
        if (tapMobile != null) {
            if (day == 1) {
                tapMobile[_0x245E2[194]] = false
            }
        }
    }

    function _0x2506B() {
        jUpPressed = true;
        if (day == 1) {
            tapMobile[_0x245E2[194]] = false
        }
    }

    function _0x250C2() {
        jDownPressed = false
    }

    function _0x25119() {
        jUpPressed = false
    }

    function _0x25170() {
        jBoostPressed = true;
        player[_0x245E2[264]][_0x245E2[263]] = false;
        if (tapMobile != null) {
            if (day == 4) {
                tapMobile[_0x245E2[194]] = false
            }
        }
    }

    function _0x251C7() {
        player[_0x245E2[264]][_0x245E2[263]] = true;
        player[_0x245E2[265]] = false
    }

    function _0x2521E() {
        if (day == 1 || day == 2 || day == 3) {} else {
            try {
                window[_0x245E2[267]](_0x245E2[266])
            } catch (e) {}
        }
    }

    function _0x25275(_0x24639) {
        if (_0x24639 == _0x245E2[146]) {
            resumeInGame = game[_0x245E2[48]][_0x245E2[66]](255, 280, _0x245E2[128], _0x245E2[268]);
            resumeInGame[_0x245E2[194]] = false;
            objButton = new RocketWW2[_0x245E2[269]](this[_0x245E2[23]], this[_0x245E2[59]]);
            day = levelProperties[_0x245E2[155]][_0x245E2[192]];
            content = _0x245E2[270] + day;
            objButton[_0x245E2[251]]()
        } else {
            if (_0x24639 == _0x245E2[147]) {
                resumeInGame = game[_0x245E2[48]][_0x245E2[66]](255, 280, _0x245E2[128], _0x245E2[268]);
                resumeInGame[_0x245E2[194]] = false;
                var _0x246E7 = new RocketWW2[_0x245E2[269]](this[_0x245E2[23]], this[_0x245E2[59]]);
                var _0x24690 = new RocketWW2[_0x245E2[269]](this[_0x245E2[23]], this[_0x245E2[59]]);
                _0x24690[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[271], 95, 25, _0x245E2[271]);
                if (music[_0x245E2[273]] == 1) {
                    _0x246E7[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[274], 35, 25, _0x245E2[274]);
                    _0x246E7[_0x245E2[276]][_0x245E2[275]](_0x245E2[128], _0x245E2[274], 0, false);
                    snd[_0x245E2[278]](_0x245E2[277])
                } else {
                    if (music[_0x245E2[273]] == 0) {
                        _0x246E7[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[274], 35, 25, _0x245E2[274]);
                        _0x246E7[_0x245E2[276]][_0x245E2[275]](_0x245E2[128], _0x245E2[279], 0, false)
                    } else {
                        if (music[_0x245E2[273]] == 0.3) {
                            _0x246E7[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[274], 35, 25, _0x245E2[274]);
                            _0x246E7[_0x245E2[276]][_0x245E2[275]](_0x245E2[128], _0x245E2[274], 0, false);
                            snd[_0x245E2[278]](_0x245E2[277])
                        }
                    }
                };
                this[_0x245E2[281]](nextButton, 345, 340, this[_0x245E2[280]]);
                this[_0x245E2[281]](buttonHome, 520, 140, this[_0x245E2[280]]);
                this[_0x245E2[281]](btnReplay, 335, 330, this[_0x245E2[282]]);
                consoleGM[_0x245E2[194]] = false;
                cadetWin[_0x245E2[194]] = false;
                siglaGM[_0x245E2[194]] = false;
                buttonHome[_0x245E2[194]] = false;
                mask2[_0x245E2[194]] = false
            }
        }
    }

    function _0x252CC(_0x24639, _0x2473E, _0x24795, _0x24690, _0x246E7) {
        _0x24639[_0x245E2[284]] = _0x24690;
        _0x24639[_0x245E2[285]] = _0x246E7;
        _0x24639[_0x245E2[195]] = _0x2473E;
        _0x24639[_0x245E2[196]] = _0x24795
    }

    function _0x25323(_0x24690, _0x246E7, _0x2473E, _0x24639) {
        _0x24690[_0x245E2[70]] = true;
        _0x24690[_0x245E2[72]][_0x245E2[73]] = true;
        _0x24690[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](_0x24639, this);
        _0x24690[_0x245E2[195]] = _0x246E7;
        _0x24690[_0x245E2[196]] = _0x2473E;
        _0x24690[_0x245E2[194]] = false
    }

    function _0x2537A() {
        txtRetry = this[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[1], {
            font: _0x245E2[287],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        txtRetry[_0x245E2[195]] = 275;
        txtRetry[_0x245E2[196]] = 210;
        txtRetry[_0x245E2[284]] = _0x245E2[290];
        txtRetry[_0x245E2[285]] = 5;
        txtRetry[_0x245E2[194]] = false;
        this[_0x245E2[179]][_0x245E2[291]][_0x245E2[48]](txtRetry)
    }

    function _0x253D1() {
        txtTimeLost = this[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[292], {
            font: _0x245E2[287],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        txtTimeLost[_0x245E2[195]] = 285;
        txtTimeLost[_0x245E2[196]] = 210;
        txtTimeLost[_0x245E2[284]] = _0x245E2[290];
        txtTimeLost[_0x245E2[285]] = 5;
        txtTimeLost[_0x245E2[194]] = false;
        this[_0x245E2[179]][_0x245E2[291]][_0x245E2[48]](txtTimeLost)
    }

    function _0x25428() {
        timerSeconds = levelProperties[_0x245E2[155]][_0x245E2[154]];
        this[_0x245E2[40]] = game[_0x245E2[48]][_0x245E2[40]](755, 75, timerSeconds, {
            font: _0x245E2[293],
            fill: _0x245E2[294]
        });
        this[_0x245E2[40]][_0x245E2[284]] = _0x245E2[288];
        this[_0x245E2[40]][_0x245E2[285]] = 5;
        this[_0x245E2[40]][_0x245E2[296]][_0x245E2[295]](0.5, 0.5);
        this[_0x245E2[297]] = this[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[298] + levelProperties[_0x245E2[155]][_0x245E2[192]], {
            font: _0x245E2[299],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[297]][_0x245E2[195]] = 10;
        this[_0x245E2[297]][_0x245E2[196]] = 562;
        this[_0x245E2[297]][_0x245E2[284]] = _0x245E2[290];
        this[_0x245E2[297]][_0x245E2[285]] = 5;
        this[_0x245E2[179]][_0x245E2[291]][_0x245E2[48]](this[_0x245E2[40]]);
        this[_0x245E2[179]][_0x245E2[291]][_0x245E2[48]](this[_0x245E2[297]])
    }

    function _0x2547F(_0x246E7, _0x2473E, _0x24690, _0x248F1, _0x24948, _0x2489A, _0x24639, _0x24843, _0x247EC) {
        var _0x24795 = new Object;
        _0x24795 = {
            "width": _0x2489A,
            "height": _0x24639,
            "name": _0x246E7,
            "type": _0x2473E,
            "rectangle": true,
            "visible": true,
            "x": _0x248F1,
            "y": _0x24948,
            "properties": {
                "group": _0x24690,
                "width": _0x2489A,
                "height": _0x24639,
                "texture": _0x24843
            }
        };
        objBgCloud = _0x24795;
        this[_0x245E2[170]][_0x245E2[183]][_0x247EC][_0x245E2[173]](_0x24795);
        this[_0x245E2[300]] = this[_0x245E2[170]]
    }

    function _0x254D6() {
        tweenFill = game[_0x245E2[48]][_0x245E2[159]](mask)[_0x245E2[158]]({
            x: 460
        }, timerSeconds * 1000, _0x245E2[157], true);
        tweenFill[_0x245E2[161]][_0x245E2[48]](this[_0x245E2[301]], this)
    }

    function _0x2552D() {
        var _0x2473E = [];
        var _0x24639 = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[302]](800, 600);
        var _0x24795 = 0;
        _0x24639[_0x245E2[303]]();
        for (var _0x246E7 = 0; _0x246E7 < 800; _0x246E7++) {
            var _0x24690 = Phaser[_0x245E2[305]][_0x245E2[304]](0xa9f8ff, 0xdbfdff, 200, _0x246E7);
            _0x24639[_0x245E2[307]](0, _0x24795, 800, _0x24795 + 2, Phaser[_0x245E2[305]][_0x245E2[306]](_0x24690));
            _0x2473E[_0x245E2[173]](Phaser[_0x245E2[305]][_0x245E2[306]](_0x24690));
            _0x24795 += 2
        }
    }

    function _0x25584(_0x24639) {
        this[_0x245E2[170]] = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[86]](_0x24639[_0x245E2[170]][_0x245E2[308]]);
        tileset_index = 0;
        this[_0x245E2[170]][_0x245E2[309]][_0x245E2[174]](function(_0x24690) {
            this[_0x245E2[170]][_0x245E2[310]](_0x24690[_0x245E2[168]], _0x24639[_0x245E2[170]][_0x245E2[309]][tileset_index]);
            tileset_index += 1
        }, this)
    }

    function _0x255DB() {
        var _0x24639 = (Math[_0x245E2[312]]() * 3) + 1
    }

    function _0x25632() {
        mask2 = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[313]](0, 0);
        mask2[_0x245E2[314]](0x000000, 0.4);
        mask2[_0x245E2[315]](0, 0);
        mask2[_0x245E2[315]](100, 0);
        mask2[_0x245E2[315]](100, 100);
        mask2[_0x245E2[315]](0, 100);
        mask2[_0x245E2[316]]();
        mask2[_0x245E2[27]][_0x245E2[317]](8);
        mask2[_0x245E2[194]] = false
    }

    function _0x25689() {
        mask = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[313]](450, 0);
        mask[_0x245E2[314]](0xffffff, 0);
        mask[_0x245E2[315]](0, 0);
        mask[_0x245E2[315]](180, 0);
        mask[_0x245E2[315]](151, 60);
        mask[_0x245E2[315]](0, 60);
        mask[_0x245E2[316]]()
    }

    function _0x256E0() {
        _0x245E2[13];
        if (this[_0x245E2[182]][_0x245E2[319]] && this[_0x245E2[182]][_0x245E2[319]][_0x245E2[320]]) {
            this[_0x245E2[182]][_0x245E2[202]][_0x245E2[195]] = this[_0x245E2[182]][_0x245E2[319]][_0x245E2[195]];
            this[_0x245E2[182]][_0x245E2[202]][_0x245E2[196]] = this[_0x245E2[182]][_0x245E2[319]][_0x245E2[196]]
        } else {
            this[_0x245E2[23]][_0x245E2[47]][_0x245E2[321]](true, false, this[_0x245E2[59]])
        }
    }

    function _0x25737(_0x24843) {
        var _0x24795 = gotoLevel[_0x245E2[3]](_0x245E2[323]);
        var _0x247EC = new RocketWW2[_0x245E2[135]](this[_0x245E2[324]]);
        if (_0x24843 == _0x245E2[325]) {
            var _0x2473E = Number(_0x24795[1]) + 1;
            this[_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] = (_0x245E2[323] + _0x2473E)[_0x245E2[326]]();
            gotoLevel = this[_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0];
            previousLevel = (_0x245E2[323] + (_0x2473E - 1))[_0x245E2[326]]();
            var _0x246E7 = _0x247EC[_0x245E2[327]](Number(_0x24795[1]));
            this[_0x245E2[328]] = _0x2473E
        };
        if (_0x24843 == _0x245E2[329]) {
            var _0x246E7 = _0x247EC[_0x245E2[327]](Number(_0x24795[1] - 1))
        };
        try {
            localStorage[_0x245E2[331]](_0x245E2[330], _0x246E7)
        } catch (e) {};
        if (this[_0x245E2[328]] < 22) {
            var _0x24690;
            _0x24690 = this[_0x245E2[23]][_0x245E2[43]][_0x245E2[42]](gotoLevel);
            var _0x24639 = JSON[_0x245E2[44]](_0x24690);
            _0x24639[_0x245E2[167]][_0x245E2[174]](function(_0x24639) {
                if (_0x24639[_0x245E2[168]] == _0x245E2[228]) {
                    _0x24639[_0x245E2[183]][_0x245E2[174]](function(_0x24639) {
                        levelProperties = _0x24639[_0x245E2[155]]
                    })
                }
            })
        };
        if (this[_0x245E2[328]] == 22) {
            finalGameCompleted = true
        };
        this[_0x245E2[262]]()
    }

    function _0x2578E() {
        if (music[_0x245E2[273]] != 0) {
            snd[_0x245E2[278]](_0x245E2[329]);
            levelLose[_0x245E2[122]]()
        };
        playTimerTweenVar = undefined;
        btnReplay[_0x245E2[194]] = true;
        buttonHome[_0x245E2[194]] = true;
        if (this[_0x245E2[324]]) {
            game[_0x245E2[96]][_0x245E2[151]](this[_0x245E2[324]][_0x245E2[179]][_0x245E2[291]])
        };
        if (timerSeconds > 0) {
            bgTransitionMOG[_0x245E2[332]]();
            bgTransitionMOG[_0x245E2[333]]()
        } else {
            bgTransitionMOG[_0x245E2[334]]();
            bgTransitionMOG[_0x245E2[333]]()
        };
        windowCloseGroupGM[_0x245E2[48]](btnReplay);
        windowCloseGroupGM[_0x245E2[48]](buttonHome);
        player[_0x245E2[335]]();
        emitterPlane[_0x245E2[336]]();
        instObject[_0x245E2[337]](this);
        if (this[_0x245E2[322]]) {
            this[_0x245E2[322]](_0x245E2[329]);
            this[_0x245E2[338]]()
        } else {
            this[_0x245E2[324]][_0x245E2[322]](_0x245E2[329]);
            this[_0x245E2[324]][_0x245E2[338]]()
        };
        windowCloseGroupGM[_0x245E2[48]](moreGames);
        if (playerCrashed == true) {
            _0x2521E()
        }
    }

    function _0x257E5() {
        moreGames = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[132]](260, 460, _0x245E2[128], _0x24A4D, this, _0x245E2[339], _0x245E2[339]);
        moreGames[_0x245E2[70]] = true;
        moreGames[_0x245E2[72]][_0x245E2[73]] = true
    }

    function _0x2583C() {
       
    }

    function _0x25893() {
        player[_0x245E2[344]]()
    }

    function _0x258EA() {
        if (this[_0x245E2[322]]) {
            this[_0x245E2[322]](_0x245E2[325]);
            this[_0x245E2[338]]()
        } else {
            this[_0x245E2[324]][_0x245E2[322]](_0x245E2[325]);
            this[_0x245E2[324]][_0x245E2[338]]()
        }; if (music[_0x245E2[273]] != 0) {
            snd[_0x245E2[278]](_0x245E2[329]);
            levelWin[_0x245E2[122]]()
        };
        if (this[_0x245E2[328]] == 22) {
            bgTransitionMOG[_0x245E2[346]]();
            bgTransitionMOG[_0x245E2[347]]();
            windowCloseGroupGC[_0x245E2[48]](nextButton);
            windowCloseGroupGC[_0x245E2[48]](buttonHome);
            windowCloseGroupGC[_0x245E2[48]](moreGames);
            player[_0x245E2[335]]();
            emitterPlane[_0x245E2[336]]();
            buttonHome[_0x245E2[195]] = 345;
            buttonHome[_0x245E2[196]] = 340;
            buttonHome[_0x245E2[194]] = true;
            instObject[_0x245E2[337]](this)
        } else {
            bgTransitionMOG[_0x245E2[348]]();
            bgTransitionMOG[_0x245E2[349]]();
            windowCloseGroupLW[_0x245E2[48]](nextButton);
            windowCloseGroupLW[_0x245E2[48]](buttonHome);
            windowCloseGroupLW[_0x245E2[48]](moreGames);
            player[_0x245E2[335]]();
            emitterPlane[_0x245E2[336]]();
            nextButton[_0x245E2[194]] = true;
            buttonHome[_0x245E2[194]] = true;
            instObject[_0x245E2[337]](this)
        };
        _0x2521E()
    }

    function _0x25941() {
        if (timerSeconds > 0 && game_overVar == false) {
            timerSeconds--;
            this[_0x245E2[40]][_0x245E2[350]](timerSeconds)
        }
    }

    function _0x25998() {
        replayLevel = true;
        this[_0x245E2[23]][_0x245E2[47]][_0x245E2[321]](true, false, this[_0x245E2[59]])
    }

    function _0x259EF() {
        this[_0x245E2[23]][_0x245E2[47]][_0x245E2[46]](_0x245E2[135], true, false, this[_0x245E2[59]])
    }

    function _0x25A46() {
        bgTransitionMOG[_0x245E2[148]]();
        bgTransitionMOG[_0x245E2[352]]();
        buttonHome[_0x245E2[49]][_0x245E2[74]][_0x245E2[353]](this[_0x245E2[280]], this)
    }

    function _0x25A9D() {
        var _0x245E2
    }

    function _0x25AF4() {
        bgmount = game[_0x245E2[48]][_0x245E2[355]](0, 200, 4002, 0, _0x245E2[116], _0x245E2[354]);
        bghill = game[_0x245E2[48]][_0x245E2[355]](0, 320, 4002, 0, _0x245E2[116], _0x245E2[356]);
        bgiarba = game[_0x245E2[48]][_0x245E2[355]](0, 500, 4002, 0, _0x245E2[116], _0x245E2[357])
    }

    function _0x25B4B() {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this)
    }

    function _0x25BA2(_0x24639) {
        _0x245E2[13];
        this[_0x245E2[59]] = _0x24639;
        levelData = this[_0x245E2[59]];
        levelMapObj = this
    }

    function _0x25BF9() {
        _0x245E2[13];
        var _0x24639 = game[_0x245E2[48]][_0x245E2[35]](0, 0, _0x245E2[359])
    }

    function _0x25C50() {
        _0x245E2[13];
        btnsUnlockedGroup = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[180]]();
        replayLevel = false;
        var _0x24639 = new RocketWW2[_0x245E2[269]](this[_0x245E2[23]], this[_0x245E2[59]]);
        var _0x246E7 = new RocketWW2[_0x245E2[269]](this[_0x245E2[23]], this[_0x245E2[59]]);
        if (addSoundsGame == true) {
            snd = new RocketWW2[_0x245E2[360]](this);
            addSoundsGame = false;
            snd[_0x245E2[361]]();
            snd[_0x245E2[278]](_0x245E2[362])
        };
        if (music[_0x245E2[273]] == 1) {
            _0x24639[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[363], 740, 50, _0x245E2[363]);
            _0x24639[_0x245E2[276]][_0x245E2[275]](_0x245E2[128], _0x245E2[363], 0, false);
            snd[_0x245E2[278]](_0x245E2[362])
        } else {
            if (music[_0x245E2[273]] == 0) {
                _0x24639[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[363], 740, 50, _0x245E2[363]);
                _0x24639[_0x245E2[276]][_0x245E2[275]](_0x245E2[128], _0x245E2[364], 0, false)
            } else {
                if (music[_0x245E2[273]] == 0.3) {
                    _0x24639[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[363], 740, 50, _0x245E2[363]);
                    _0x24639[_0x245E2[276]][_0x245E2[275]](_0x245E2[128], _0x245E2[363], 0, false);
                    snd[_0x245E2[278]](_0x245E2[362])
                }
            }
        };
        _0x246E7[_0x245E2[272]](this[_0x245E2[23]], _0x245E2[365], 57, 550, _0x245E2[366]);
        this[_0x245E2[23]][_0x245E2[22]][_0x245E2[21]] = _0x245E2[367];
        levelsObj = new Object();;;
        stars[0] = 0;
        this[_0x245E2[368]] = localStorage[_0x245E2[369]](localStorageRocketName) == null ? stars[_0x245E2[326]]() : localStorage[_0x245E2[369]](localStorageRocketName);
        stars = this[_0x245E2[368]][_0x245E2[3]](_0x245E2[370]);
        levelsObj = {
            level1Btn: {
                "name": _0x245E2[371],
                "x": 81,
                "y": 208,
                "locked": 0,
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][0]
            },
            level2Btn: {
                "name": _0x245E2[373],
                "x": 190,
                "y": 208,
                "locked": stars[1],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][1]
            },
            level3Btn: {
                "name": _0x245E2[374],
                "x": 299,
                "y": 208,
                "locked": stars[2],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][2]
            },
            level4Btn: {
                "name": _0x245E2[375],
                "x": 81,
                "y": 292,
                "locked": stars[3],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][3]
            },
            level5Btn: {
                "name": _0x245E2[376],
                "x": 190,
                "y": 292,
                "locked": stars[4],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][4]
            },
            level6Btn: {
                "name": _0x245E2[377],
                "x": 299,
                "y": 292,
                "locked": stars[5],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][5]
            },
            level7Btn: {
                "name": _0x245E2[378],
                "x": 81,
                "y": 376,
                "locked": stars[6],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][6]
            },
            level8Btn: {
                "name": _0x245E2[379],
                "x": 190,
                "y": 376,
                "locked": stars[7],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][7]
            },
            level9Btn: {
                "name": _0x245E2[380],
                "x": 299,
                "y": 376,
                "locked": stars[8],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][8]
            },
            level10Btn: {
                "name": _0x245E2[381],
                "x": 81,
                "y": 460,
                "locked": stars[9],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][9]
            },
            level11Btn: {
                "name": _0x245E2[382],
                "x": 190,
                "y": 460,
                "locked": stars[10],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][10]
            },
            level12Btn: {
                "name": _0x245E2[383],
                "x": 299,
                "y": 460,
                "locked": stars[11],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][11]
            },
            level13Btn: {
                "name": _0x245E2[384],
                "x": 397,
                "y": 88,
                "locked": stars[12],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][12]
            },
            level14Btn: {
                "name": _0x245E2[385],
                "x": 503,
                "y": 88,
                "locked": stars[13],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][13]
            },
            level15Btn: {
                "name": _0x245E2[386],
                "x": 612,
                "y": 88,
                "locked": stars[14],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][14]
            },
            level16Btn: {
                "name": _0x245E2[387],
                "x": 397,
                "y": 172,
                "locked": stars[15],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][15]
            },
            level17Btn: {
                "name": _0x245E2[388],
                "x": 503,
                "y": 172,
                "locked": stars[16],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][16]
            },
            level18Btn: {
                "name": _0x245E2[389],
                "x": 612,
                "y": 172,
                "locked": stars[17],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][17]
            },
            level19Btn: {
                "name": _0x245E2[390],
                "x": 397,
                "y": 256,
                "locked": stars[18],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][18]
            },
            level20Btn: {
                "name": _0x245E2[391],
                "x": 503,
                "y": 256,
                "locked": stars[19],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][19]
            },
            level21Btn: {
                "name": _0x245E2[392],
                "x": 612,
                "y": 256,
                "locked": stars[20],
                "map": this[_0x245E2[59]][_0x245E2[170]][_0x245E2[372]][20]
            }
        };
        this[_0x245E2[394]](this[_0x245E2[371]], levelsObj[_0x245E2[393]]);
        this[_0x245E2[394]](this[_0x245E2[373]], levelsObj[_0x245E2[395]]);
        this[_0x245E2[394]](this[_0x245E2[374]], levelsObj[_0x245E2[396]]);
        this[_0x245E2[394]](this[_0x245E2[375]], levelsObj[_0x245E2[397]]);
        this[_0x245E2[394]](this[_0x245E2[376]], levelsObj[_0x245E2[398]]);
        this[_0x245E2[394]](this[_0x245E2[377]], levelsObj[_0x245E2[399]]);
        this[_0x245E2[394]](this[_0x245E2[378]], levelsObj[_0x245E2[400]]);
        this[_0x245E2[394]](this[_0x245E2[379]], levelsObj[_0x245E2[401]]);
        this[_0x245E2[394]](this[_0x245E2[380]], levelsObj[_0x245E2[402]]);
        this[_0x245E2[394]](this[_0x245E2[381]], levelsObj[_0x245E2[403]]);
        this[_0x245E2[394]](this[_0x245E2[382]], levelsObj[_0x245E2[404]]);
        this[_0x245E2[394]](this[_0x245E2[383]], levelsObj[_0x245E2[405]]);
        this[_0x245E2[394]](this[_0x245E2[384]], levelsObj[_0x245E2[406]]);
        this[_0x245E2[394]](this[_0x245E2[385]], levelsObj[_0x245E2[407]]);
        this[_0x245E2[394]](this[_0x245E2[386]], levelsObj[_0x245E2[408]]);
        this[_0x245E2[394]](this[_0x245E2[387]], levelsObj[_0x245E2[409]]);
        this[_0x245E2[394]](this[_0x245E2[388]], levelsObj[_0x245E2[410]]);
        this[_0x245E2[394]](this[_0x245E2[389]], levelsObj[_0x245E2[411]]);
        this[_0x245E2[394]](this[_0x245E2[390]], levelsObj[_0x245E2[412]]);
        this[_0x245E2[394]](this[_0x245E2[391]], levelsObj[_0x245E2[413]]);
        this[_0x245E2[394]](this[_0x245E2[392]], levelsObj[_0x245E2[414]]);
        this[_0x245E2[415]]();
        var _0x24690 = new RocketWW2[_0x245E2[113]](this, this[_0x245E2[59]]);
        _0x24690[_0x245E2[416]]();
        _0x24690[_0x245E2[148]]();
        _0x24690[_0x245E2[417]]()
    }

    function _0x25CA7() {
        _0x25E03(levelProperties)
    }

    function _0x25CFE(_0x24639, _0x24690) {
        if (_0x24690[_0x245E2[168]] == _0x245E2[392] && _0x24690[_0x245E2[419]] == 0) {
            finalGameCompleted = true
        };
        _0x24639 = new RocketWW2[_0x245E2[420]](this, _0x24690);
        _0x24639[_0x245E2[421]](_0x24639);
        if (_0x24690[_0x245E2[419]] == 0) {
            _0x24639[_0x245E2[70]] = true;
            _0x24639[_0x245E2[423]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](function(_0x24639) {
                this[_0x245E2[422]](_0x24639)
            }, this)
        }
    }

    function _0x25D55(_0x24795) {
        if (activateButtonsLevelMap == true) {
            activateButtonsLevelMap = false;
            var _0x246E7;
            _0x246E7 = this[_0x245E2[23]][_0x245E2[43]][_0x245E2[42]](_0x24795[_0x245E2[424]]);
            var _0x24690 = JSON[_0x245E2[44]](_0x246E7);
            _0x24690[_0x245E2[167]][_0x245E2[174]](function(_0x24639) {
                if (_0x24639[_0x245E2[168]] == _0x245E2[228]) {
                    _0x24639[_0x245E2[183]][_0x245E2[174]](function(_0x24639) {
                        levelProperties = _0x24639[_0x245E2[155]]
                    })
                }
            });
            var _0x24639 = {
                "noButton": _0x24795[_0x245E2[425]],
                "mapName": _0x24795[_0x245E2[424]]
            };
            var _0x2473E = new RocketWW2[_0x245E2[113]](this, this[_0x245E2[59]], _0x24639);
            _0x2473E[_0x245E2[426]]();
            _0x2473E[_0x245E2[427]]()
        }
    }

    function _0x25DAC() {
        activateButtonsLevelMap = false;
        var _0x24639 = {
            "noButton": stars[_0x245E2[9]],
            "mapName": lastMapActive
        };
        var _0x24690 = new RocketWW2[_0x245E2[113]](levelMapObj, levelData, _0x24639);
        _0x24690[_0x245E2[426]]();
        _0x24690[_0x245E2[427]]();
        _0x24690[_0x245E2[148]]()
    }

    function _0x25E03(_0x246E7) {
        var _0x24639 = {
            "noButton": levelProperties[_0x245E2[192]],
            "mapName": _0x245E2[323] + levelProperties[_0x245E2[192]]
        };
        var _0x24690 = new RocketWW2[_0x245E2[113]](levelMapObj, levelData, _0x24639);
        _0x24690[_0x245E2[428]](levelProperties);
        _0x24690[_0x245E2[427]]();
        _0x24690[_0x245E2[148]]()
    }

    function _0x25E5A(_0x24639) {
        if (activateButtonsLevelMap == false && finalGameCompleted == true) {
            activateButtonsLevelMap = true;
            if (levelProperties) {
                if (levelProperties[_0x245E2[192]] < 22) {
                    setTimeout(this[_0x245E2[418]], 500)
                }
            }
        };
        Object[_0x245E2[430]](levelsObj)[_0x245E2[174]](function(_0x2473E, _0x246E7, _0x24795) {
            if (_0x246E7 == stars[_0x245E2[9]] - 1) {
                lastMapActive = levelsObj[_0x2473E][_0x245E2[170]]
            };
            if (levelsObj[_0x2473E][_0x245E2[419]] == 0 && _0x246E7 < stars[_0x245E2[9]] - 2) {
                this[_0x245E2[66]] = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x2473E][_0x245E2[195]] + 50, levelsObj[_0x2473E][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                this[_0x245E2[66]][_0x245E2[27]][_0x245E2[295]](0.8)
            };
            if (varShowAnimBtn == true) {
                if (stars[_0x245E2[9]] == _0x246E7 + 2 && stars[_0x245E2[9]] == 22) {
                    var _0x24639 = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x24795[_0x246E7]][_0x245E2[195]] + 50, levelsObj[_0x24795[_0x246E7]][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                    _0x24639[_0x245E2[67]] = 0;
                    var _0x24690 = game[_0x245E2[48]][_0x245E2[159]](_0x24639)[_0x245E2[158]]({
                        alpha: 1
                    }, 500, _0x245E2[157], true, 700);
                    activateButtonsLevelMap = true
                } else {
                    if ((_0x246E7 + 1) == stars[_0x245E2[9]] && stars[_0x245E2[9]] == 21) {
                        if (levelsObj[_0x24795[_0x246E7]][_0x245E2[170]] == lastMapActive) {
                            var _0x24639 = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x24795[_0x246E7 - 1]][_0x245E2[195]] + 50, levelsObj[_0x24795[_0x246E7 - 1]][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                            _0x24639[_0x245E2[67]] = 0;
                            var _0x24690 = game[_0x245E2[48]][_0x245E2[159]](_0x24639)[_0x245E2[158]]({
                                alpha: 1
                            }, 500, _0x245E2[157], true, 700);
                            _0x24690[_0x245E2[161]][_0x245E2[48]](function() {
                                _0x25DAC(), this
                            })
                        } else {
                            this[_0x245E2[66]] = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x24795[_0x246E7 - 1]][_0x245E2[195]] + 50, levelsObj[_0x24795[_0x246E7 - 1]][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                            this[_0x245E2[66]][_0x245E2[27]][_0x245E2[295]](0.8)
                        }
                    } else {
                        if (_0x246E7 == stars[_0x245E2[9]]) {
                            if (levelsObj[_0x24795[_0x246E7 - 1]][_0x245E2[170]] == lastMapActive && levelsObj[_0x24795[_0x246E7]][_0x245E2[419]] != 0) {
                                var _0x24639 = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x24795[_0x246E7 - 2]][_0x245E2[195]] + 50, levelsObj[_0x24795[_0x246E7 - 2]][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                                _0x24639[_0x245E2[67]] = 0;
                                var _0x24690 = game[_0x245E2[48]][_0x245E2[159]](_0x24639)[_0x245E2[158]]({
                                    alpha: 1
                                }, 500, _0x245E2[157], true, 700);
                                _0x24690[_0x245E2[161]][_0x245E2[48]](function() {
                                    _0x25DAC(), this
                                })
                            } else {
                                this[_0x245E2[66]] = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x24795[_0x246E7 - 2]][_0x245E2[195]] + 50, levelsObj[_0x24795[_0x246E7 - 2]][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                                this[_0x245E2[66]][_0x245E2[27]][_0x245E2[295]](0.8)
                            }
                        }
                    }
                }
            } else {
                if (_0x246E7 == stars[_0x245E2[9]] - 2) {
                    this[_0x245E2[66]] = game[_0x245E2[48]][_0x245E2[66]](levelsObj[_0x2473E][_0x245E2[195]] + 50, levelsObj[_0x2473E][_0x245E2[196]] + 5, _0x245E2[128], _0x245E2[429]);
                    this[_0x245E2[66]][_0x245E2[27]][_0x245E2[295]](0.8)
                }
            }
        })
    }

    function _0x25EB1(_0x24639) {
        stars[_0x24639] = 0;
        try {
            localStorage[_0x245E2[331]](localStorageRocketName, stars[_0x245E2[326]]())
        } catch (e) {}
    }

    function _0x25F08(_0x24639) {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this, _0x24639);
        this[_0x245E2[324]] = _0x24639
    }

    function _0x25F5F() {
        music = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[434], 1, true);
        plane = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[435], 1, true);
        planeBoost = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[436], 1, true);
        coin = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[216], 1, false);
        explosion1 = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[437], 1, false);
        explosion2 = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[438], 1, false);
        checkCircle = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[439], 0.1, false);
        levelWin = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[345], 1, false);
        levelLose = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[90]](_0x245E2[440], 1, false);
        music[_0x245E2[122]]();
        plane[_0x245E2[122]]()
    }

    function _0x25FB6() {
        music[_0x245E2[273]] = 0;
        plane[_0x245E2[273]] = 0;
        planeBoost[_0x245E2[273]] = 0;
        levelWin[_0x245E2[273]] = 0;
        levelLose[_0x245E2[273]] = 0;
        coin[_0x245E2[273]] = 0;
        checkCircle[_0x245E2[273]] = 0
    }

    function _0x2600D(_0x24690) {
        if (_0x24690 == _0x245E2[442]) {
            music[_0x245E2[273]] = 0;
            plane[_0x245E2[273]] = 0;
            planeBoost[_0x245E2[273]] = 0;
            coin[_0x245E2[273]] = 0;
            checkCircle[_0x245E2[273]] = 0;
            levelWin[_0x245E2[273]] = 0;
            levelLose[_0x245E2[273]] = 0
        } else {
            if (_0x24690 == _0x245E2[277]) {
                plane[_0x245E2[273]] = 0.07;
                planeBoost[_0x245E2[273]] = 0.1;
                music[_0x245E2[273]] = 0.3;
                coin[_0x245E2[273]] = 0.5;
                checkCircle[_0x245E2[273]] = 0.1;
                levelWin[_0x245E2[273]] = 0.7;
                levelLose[_0x245E2[273]] = 0.3
            } else {
                if (_0x24690 == _0x245E2[443]) {
                    plane[_0x245E2[273]] = 0;
                    planeBoost[_0x245E2[273]] = 0;
                    music[_0x245E2[273]] = 0.3;
                    levelWin[_0x245E2[273]] = 1;
                    levelLose[_0x245E2[273]] = 0.3;
                    var _0x24639 = Math[_0x245E2[444]](Math[_0x245E2[312]]() * 10) % 2;
                    if (_0x24639 == 0) {
                        explosion1[_0x245E2[273]] = 0.4;
                        explosion1[_0x245E2[122]]()
                    } else {
                        explosion2[_0x245E2[273]] = 0.4;
                        explosion2[_0x245E2[122]]()
                    }
                } else {
                    if (_0x24690 == _0x245E2[329]) {
                        levelWin[_0x245E2[273]] = 0.7;
                        levelLose[_0x245E2[273]] = 0.5;
                        plane[_0x245E2[273]] = 0;
                        planeBoost[_0x245E2[273]] = 0;
                        music[_0x245E2[273]] = 0.3
                    } else {
                        if (_0x24690 == _0x245E2[362]) {
                            plane[_0x245E2[273]] = 0;
                            planeBoost[_0x245E2[273]] = 0;
                            music[_0x245E2[273]] = 1;
                            coin[_0x245E2[273]] = 0;
                            checkCircle[_0x245E2[273]] = 0;
                            levelWin[_0x245E2[273]] = 0;
                            levelLose[_0x245E2[273]] = 0
                        }
                    }
                }
            }
        }
    }

    function _0x26064() {
        if (window[_0x245E2[445]]) {
            music[_0x245E2[273]] = 0;
            plane[_0x245E2[273]] = 0;
            planeBoost[_0x245E2[273]] = 0;
            levelWin[_0x245E2[273]] = 0;
            levelLose[_0x245E2[273]] = 0;
            coin[_0x245E2[273]] = 0;
            checkCircle[_0x245E2[273]] = 0
        }
    }

    function _0x260BB() {
        if (musicBtnActive == 0) {
            plane[_0x245E2[273]] = 0;
            planeBoost[_0x245E2[273]] = 0;
            music[_0x245E2[273]] = 0.3;
            coin[_0x245E2[273]] = 0.5;
            checkCircle[_0x245E2[273]] = 0.1;
            levelWin[_0x245E2[273]] = 0.7;
            levelLose[_0x245E2[273]] = 0.3
        }
    }

    function _0x26112(_0x24639) {
        if (music[_0x245E2[273]] == 1) {
            musicBtnActive = 1;
            if (locationBtnSound == _0x245E2[362]) {
                this[_0x245E2[278]](_0x245E2[442]);
                _0x24639[_0x245E2[275]](_0x245E2[128], _0x245E2[364], 0, false)
            } else {
                if (locationBtnSound == _0x245E2[277]) {
                    this[_0x245E2[278]](_0x245E2[442]);
                    _0x24639[_0x245E2[275]](_0x245E2[128], _0x245E2[279], 0, false)
                }
            }
        } else {
            if (music[_0x245E2[273]] == 0) {
                musicBtnActive = 0;
                if (locationBtnSound == _0x245E2[362]) {
                    this[_0x245E2[278]](_0x245E2[362]);
                    _0x24639[_0x245E2[275]](_0x245E2[128], _0x245E2[363], 0, false)
                } else {
                    if (locationBtnSound == _0x245E2[277]) {
                        this[_0x245E2[278]](_0x245E2[277]);
                        _0x24639[_0x245E2[275]](_0x245E2[128], _0x245E2[274], 0, false)
                    }
                }
            } else {
                if (music[_0x245E2[273]] == 0.3) {
                    musicBtnActive = 1;
                    if (locationBtnSound == _0x245E2[362]) {
                        this[_0x245E2[278]](_0x245E2[442]);
                        _0x24639[_0x245E2[275]](_0x245E2[128], _0x245E2[364], 0, false)
                    } else {
                        if (locationBtnSound == _0x245E2[277]) {
                            this[_0x245E2[278]](_0x245E2[442]);
                            _0x24639[_0x245E2[275]](_0x245E2[128], _0x245E2[279], 0, false)
                        }
                    }
                }
            }
        }
    }

    function _0x26169(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this, _0x24639, _0x24690);
        this[_0x245E2[324]] = _0x24639;
        this[_0x245E2[59]] = _0x24690;
        this[_0x245E2[447]] = _0x246E7
    }

    function _0x261C0() {
        bgUp = game[_0x245E2[48]][_0x245E2[66]](0, -300, _0x245E2[448]);
        bgdown = game[_0x245E2[48]][_0x245E2[66]](0, 600, _0x245E2[448]);
        bgdown[_0x245E2[296]][_0x245E2[295]](0, 1);
        bgdown[_0x245E2[27]][_0x245E2[196]] *= -1
    }

    function _0x26217() {
        this[_0x245E2[449]] = game[_0x245E2[48]][_0x245E2[159]](bgUp)[_0x245E2[158]]({
            y: 0
        }, 400, _0x245E2[157], true);
        this[_0x245E2[450]] = game[_0x245E2[48]][_0x245E2[159]](bgdown)[_0x245E2[158]]({
            y: 300
        }, 400, _0x245E2[157], true);
        this[_0x245E2[449]][_0x245E2[161]][_0x245E2[48]](function() {
            game[_0x245E2[50]][_0x245E2[49]][_0x245E2[48]](300, this[_0x245E2[451]], this)
        }, this)
    }

    function _0x2626E() {
        bgUp[_0x245E2[196]] = 0;
        bgdown[_0x245E2[196]] = 300;
        this[_0x245E2[449]] = game[_0x245E2[48]][_0x245E2[159]](bgUp)[_0x245E2[158]]({
            y: -300
        }, 400, _0x245E2[157], true);
        this[_0x245E2[450]] = game[_0x245E2[48]][_0x245E2[159]](bgdown)[_0x245E2[158]]({
            y: 600
        }, 400, _0x245E2[157], true)
    }

    function _0x262C5() {
        this[_0x245E2[452]] = game[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[453], {
            font: _0x245E2[287],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[452]][_0x245E2[195]] = 275;
        this[_0x245E2[452]][_0x245E2[196]] = 210;
        this[_0x245E2[452]][_0x245E2[284]] = _0x245E2[290];
        this[_0x245E2[452]][_0x245E2[285]] = 5;
        windowCloseGroupGM[_0x245E2[48]](this[_0x245E2[452]])
    }

    function _0x2631C() {
        this[_0x245E2[455]] = game[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[456], {
            font: _0x245E2[457],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[455]][_0x245E2[195]] = 230;
        this[_0x245E2[455]][_0x245E2[196]] = 210;
        this[_0x245E2[455]][_0x245E2[284]] = _0x245E2[290];
        this[_0x245E2[455]][_0x245E2[285]] = 5;
        windowCloseGroupLW[_0x245E2[48]](this[_0x245E2[455]])
    }

    function _0x26373() {
        this[_0x245E2[455]] = game[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[459], {
            font: _0x245E2[457],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[455]][_0x245E2[195]] = 230;
        this[_0x245E2[455]][_0x245E2[196]] = 210;
        this[_0x245E2[455]][_0x245E2[284]] = _0x245E2[290];
        this[_0x245E2[455]][_0x245E2[285]] = 5;
        windowCloseGroupGC[_0x245E2[48]](this[_0x245E2[455]])
    }

    function _0x263CA() {
        this[_0x245E2[460]] = game[_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[292], {
            font: _0x245E2[287],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[460]][_0x245E2[195]] = 285;
        this[_0x245E2[460]][_0x245E2[196]] = 210;
        this[_0x245E2[460]][_0x245E2[284]] = _0x245E2[290];
        this[_0x245E2[460]][_0x245E2[285]] = 5;
        windowCloseGroupGM[_0x245E2[48]](this[_0x245E2[460]])
    }

    function _0x26421(_0x24690, _0x24639) {
        _0x24690[_0x245E2[70]] = true;
        _0x24690[_0x245E2[72]][_0x245E2[73]] = true;
        _0x24690[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](_0x24639, this)
    }

    function _0x26478() {
        this[_0x245E2[449]] = game[_0x245E2[48]][_0x245E2[159]](bgUp)[_0x245E2[158]]({
            y: 0
        }, 400, _0x245E2[157], true);
        this[_0x245E2[450]] = game[_0x245E2[48]][_0x245E2[159]](bgdown)[_0x245E2[158]]({
            y: 300
        }, 400, _0x245E2[157], true);
        this[_0x245E2[449]][_0x245E2[161]][_0x245E2[48]](function() {
            game[_0x245E2[50]][_0x245E2[49]][_0x245E2[48]](300, this[_0x245E2[462]], this)
        }, this)
    }

    function _0x264CF() {
        this[_0x245E2[165]]();
        windowCloseGroupLM = game[_0x245E2[48]][_0x245E2[180]]();
        consoleLM = game[_0x245E2[48]][_0x245E2[66]](110, 60, _0x245E2[128], _0x245E2[463]);
        logoConsoleLM = game[_0x245E2[48]][_0x245E2[66]](145, 30, _0x245E2[128], _0x245E2[464]);
        btnStartLevelLM = game[_0x245E2[48]][_0x245E2[66]](335, 420, _0x245E2[128], _0x245E2[365]);
        closeWindowLM = game[_0x245E2[48]][_0x245E2[66]](605, 65, _0x245E2[128], _0x245E2[465]);
        windowCloseGroupLM[_0x245E2[48]](mask2LM);
        windowCloseGroupLM[_0x245E2[48]](consoleLM);
        windowCloseGroupLM[_0x245E2[48]](logoConsoleLM);
        windowCloseGroupLM[_0x245E2[48]](btnStartLevelLM);
        windowCloseGroupLM[_0x245E2[48]](closeWindowLM);
        windowCloseGroupLM[_0x245E2[48]](logoConsoleLM);
        closeWindowLM[_0x245E2[27]][_0x245E2[295]](1.3);
        windowCloseGroupLM[_0x245E2[194]] = false;
        windowCloseGroupLM[_0x245E2[196]] = -200
    }

    function _0x26526() {
        this[_0x245E2[165]]();
        windowCloseGroupGM = game[_0x245E2[48]][_0x245E2[180]]();
        consoleGM = game[_0x245E2[48]][_0x245E2[66]](110, 60, _0x245E2[128], _0x245E2[463]);
        logoConsoleGM = game[_0x245E2[48]][_0x245E2[66]](145, 30, _0x245E2[128], _0x245E2[464]);
        cadetLose = game[_0x245E2[48]][_0x245E2[66]](20, 100, _0x245E2[128], _0x245E2[466]);
        avionGM = game[_0x245E2[48]][_0x245E2[66]](500, 400, _0x245E2[128], _0x245E2[467]);
        windowCloseGroupGM[_0x245E2[48]](mask2);
        windowCloseGroupGM[_0x245E2[48]](consoleGM);
        windowCloseGroupGM[_0x245E2[48]](logoConsoleGM);
        windowCloseGroupGM[_0x245E2[48]](logoConsoleGM);
        windowCloseGroupGM[_0x245E2[48]](cadetLose);
        windowCloseGroupGM[_0x245E2[48]](avionGM);
        this[_0x245E2[286]]();
        windowCloseGroupGM[_0x245E2[194]] = false;
        windowCloseGroupGM[_0x245E2[196]] = -200
    }

    function _0x2657D() {
        this[_0x245E2[165]]();
        windowCloseGroupGM = game[_0x245E2[48]][_0x245E2[180]]();
        consoleGM = game[_0x245E2[48]][_0x245E2[66]](110, 60, _0x245E2[128], _0x245E2[463]);
        logoConsoleGM = game[_0x245E2[48]][_0x245E2[66]](145, 30, _0x245E2[128], _0x245E2[464]);
        cadetLose = game[_0x245E2[48]][_0x245E2[66]](20, 100, _0x245E2[128], _0x245E2[466]);
        avionGM = game[_0x245E2[48]][_0x245E2[66]](500, 400, _0x245E2[128], _0x245E2[467]);
        windowCloseGroupGM[_0x245E2[48]](mask2);
        windowCloseGroupGM[_0x245E2[48]](consoleGM);
        windowCloseGroupGM[_0x245E2[48]](logoConsoleGM);
        windowCloseGroupGM[_0x245E2[48]](logoConsoleGM);
        windowCloseGroupGM[_0x245E2[48]](cadetLose);
        windowCloseGroupGM[_0x245E2[48]](avionGM);
        this[_0x245E2[190]]();
        windowCloseGroupGM[_0x245E2[194]] = false;
        windowCloseGroupGM[_0x245E2[196]] = -200
    }

    function _0x265D4() {
        this[_0x245E2[324]][_0x245E2[324]][_0x245E2[47]][_0x245E2[46]](_0x245E2[136], true, false, this[_0x245E2[324]][_0x245E2[59]])
    }

    function _0x2662B() {
        this[_0x245E2[165]]();
        windowCloseGroupLW = game[_0x245E2[48]][_0x245E2[180]]();
        consoleLW = game[_0x245E2[48]][_0x245E2[66]](110, 60, _0x245E2[128], _0x245E2[463]);
        logoConsoleLW = game[_0x245E2[48]][_0x245E2[66]](145, 30, _0x245E2[128], _0x245E2[464]);
        cadetWin = game[_0x245E2[48]][_0x245E2[66]](20, 100, _0x245E2[128], _0x245E2[469]);
        windowCloseGroupLW[_0x245E2[48]](mask2);
        windowCloseGroupLW[_0x245E2[48]](consoleLW);
        windowCloseGroupLW[_0x245E2[48]](logoConsoleLW);
        windowCloseGroupLW[_0x245E2[48]](cadetWin);
        this[_0x245E2[454]]();
        windowCloseGroupLW[_0x245E2[194]] = false;
        windowCloseGroupLW[_0x245E2[196]] = -200
    }

    function _0x26682() {
        this[_0x245E2[165]]();
        windowCloseGroupGC = game[_0x245E2[48]][_0x245E2[180]]();
        consoleGC = game[_0x245E2[48]][_0x245E2[66]](110, 60, _0x245E2[128], _0x245E2[463]);
        logoConsoleGC = game[_0x245E2[48]][_0x245E2[66]](145, 30, _0x245E2[128], _0x245E2[464]);
        cadetWin = game[_0x245E2[48]][_0x245E2[66]](20, 100, _0x245E2[128], _0x245E2[469]);
        windowCloseGroupGC[_0x245E2[48]](mask2);
        windowCloseGroupGC[_0x245E2[48]](consoleGC);
        windowCloseGroupGC[_0x245E2[48]](logoConsoleGC);
        windowCloseGroupGC[_0x245E2[48]](cadetWin);
        this[_0x245E2[458]]();
        windowCloseGroupGC[_0x245E2[194]] = false;
        windowCloseGroupGC[_0x245E2[196]] = -200
    }

    function _0x266D9() {
        this[_0x245E2[165]]();
        windowCredits = game[_0x245E2[48]][_0x245E2[180]]();
        consoleLM = game[_0x245E2[48]][_0x245E2[66]](188, 100, _0x245E2[128], _0x245E2[463]);
        this[_0x245E2[470]] = game[_0x245E2[48]][_0x245E2[40]](335, 140, _0x245E2[471], {
            font: _0x245E2[472],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[473]] = game[_0x245E2[48]][_0x245E2[40]](310, 185, _0x245E2[474], {
            font: _0x245E2[475],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[476]] = game[_0x245E2[48]][_0x245E2[40]](270, 225, _0x245E2[477], {
            font: _0x245E2[478],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[479]] = game[_0x245E2[48]][_0x245E2[40]](308, 300, _0x245E2[480], {
            font: _0x245E2[478],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[434]] = game[_0x245E2[48]][_0x245E2[40]](318, 475, _0x245E2[481], {
            font: _0x245E2[482],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        logoCredits = game[_0x245E2[48]][_0x245E2[132]](350, 370, _0x245E2[128], _0x24AA4, this, _0x245E2[483], _0x245E2[483], _0x245E2[483]);
        logoCredits[_0x245E2[70]] = true;
        logoCredits[_0x245E2[72]][_0x245E2[73]] = true;
        consoleLM[_0x245E2[27]][_0x245E2[317]](0.8);
        windowCredits[_0x245E2[48]](mask2LM);
        windowCredits[_0x245E2[48]](consoleLM);
        windowCredits[_0x245E2[48]](this[_0x245E2[470]]);
        windowCredits[_0x245E2[48]](this[_0x245E2[473]]);
        windowCredits[_0x245E2[48]](this[_0x245E2[476]]);
        windowCredits[_0x245E2[48]](this[_0x245E2[479]]);
        windowCredits[_0x245E2[48]](this[_0x245E2[434]]);
        windowCredits[_0x245E2[48]](logoCredits);
        windowCredits[_0x245E2[67]] = 0;
        windowCredits[_0x245E2[196]] = -200
    }

    function _0x26730() {
        _0x245E2[484];
        this[_0x245E2[485]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[298] + levelProperties[_0x245E2[192]], {
            font: _0x245E2[457],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[283]](this[_0x245E2[485]], 348, 200, _0x245E2[290], 5);
        this[_0x245E2[486]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[487], {
            font: _0x245E2[488],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[283]](this[_0x245E2[486]], 250, 305, _0x245E2[290], 5);
        this[_0x245E2[489]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](0, 0, levelProperties[_0x245E2[154]] + _0x245E2[490], {
            font: _0x245E2[457],
            fill: _0x245E2[491],
            align: _0x245E2[289]
        });
        this[_0x245E2[283]](this[_0x245E2[489]], 295, 260, _0x245E2[290], 5);
        windowCloseGroupLM[_0x245E2[48]](this[_0x245E2[485]]);
        windowCloseGroupLM[_0x245E2[48]](this[_0x245E2[486]]);
        windowCloseGroupLM[_0x245E2[48]](this[_0x245E2[489]]);
        btnStartLevelLM[_0x245E2[70]] = true;
        btnStartLevelLM[_0x245E2[72]][_0x245E2[73]] = true;
        closeWindowLM[_0x245E2[70]] = true;
        closeWindowLM[_0x245E2[72]][_0x245E2[73]] = true;
        btnStartLevelLM[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[492]], this);
        closeWindowLM[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[493]], this)
    }

    function _0x26787(_0x24639) {
        _0x245E2[484];
        this[_0x245E2[485]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[298] + _0x24639[_0x245E2[192]], {
            font: _0x245E2[457],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[283]](this[_0x245E2[485]], 348, 200, _0x245E2[290], 5);
        this[_0x245E2[486]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](0, 0, _0x245E2[487], {
            font: _0x245E2[488],
            fill: _0x245E2[288],
            align: _0x245E2[289]
        });
        this[_0x245E2[283]](this[_0x245E2[486]], 250, 305, _0x245E2[290], 5);
        this[_0x245E2[489]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](0, 0, _0x24639[_0x245E2[154]] + _0x245E2[490], {
            font: _0x245E2[457],
            fill: _0x245E2[491],
            align: _0x245E2[289]
        });
        this[_0x245E2[283]](this[_0x245E2[489]], 295, 260, _0x245E2[290], 5);
        windowCloseGroupLM[_0x245E2[48]](this[_0x245E2[485]]);
        windowCloseGroupLM[_0x245E2[48]](this[_0x245E2[486]]);
        windowCloseGroupLM[_0x245E2[48]](this[_0x245E2[489]]);
        btnStartLevelLM[_0x245E2[70]] = true;
        closeWindowLM[_0x245E2[70]] = true;
        btnStartLevelLM[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[492]], this);
        closeWindowLM[_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[493]], this)
    }

    function _0x267DE(_0x24639, _0x2473E, _0x24795, _0x24690, _0x246E7) {
        _0x24639[_0x245E2[284]] = _0x24690;
        _0x24639[_0x245E2[285]] = _0x246E7;
        _0x24639[_0x245E2[195]] = _0x2473E;
        _0x24639[_0x245E2[196]] = _0x24795
    }

    function _0x26835() {
        this[_0x245E2[461]]();
        btnStartLevelLM[_0x245E2[49]][_0x245E2[74]][_0x245E2[353]](this[_0x245E2[492]], this)
    }

    function _0x2688C() {
        windowCloseGroupLM[_0x245E2[194]] = false;
        game[_0x245E2[48]][_0x245E2[159]](windowCloseGroupLM)[_0x245E2[158]]({
            y: -200
        }, 150, _0x245E2[157], true);
        activateButtonsLevelMap = true;
        this[_0x245E2[485]][_0x245E2[335]]();
        this[_0x245E2[486]][_0x245E2[335]]();
        this[_0x245E2[489]][_0x245E2[335]]();
        closeWindowLM[_0x245E2[49]][_0x245E2[74]][_0x245E2[353]](this[_0x245E2[493]], this)
    }

    function _0x268E3() {
        activateButtonsLevelMap = false;
        windowCloseGroupLM[_0x245E2[194]] = true;
        game[_0x245E2[48]][_0x245E2[159]](windowCloseGroupLM)[_0x245E2[158]]({
            y: 0
        }, 500, Phaser[_0x245E2[496]][_0x245E2[495]][_0x245E2[494]], true)
    }

    function _0x2693A() {
        windowCloseGroupGM[_0x245E2[194]] = true;
        game[_0x245E2[48]][_0x245E2[159]](windowCloseGroupGM)[_0x245E2[158]]({
            y: 0
        }, 500, Phaser[_0x245E2[496]][_0x245E2[495]][_0x245E2[494]], true)
    }

    function _0x26991() {
        windowCloseGroupLW[_0x245E2[194]] = true;
        game[_0x245E2[48]][_0x245E2[159]](windowCloseGroupLW)[_0x245E2[158]]({
            y: 0
        }, 500, Phaser[_0x245E2[496]][_0x245E2[495]][_0x245E2[494]], true)
    }

    function _0x269E8() {
        windowCloseGroupGC[_0x245E2[194]] = true;
        game[_0x245E2[48]][_0x245E2[159]](windowCloseGroupGC)[_0x245E2[158]]({
            y: 0
        }, 500, Phaser[_0x245E2[496]][_0x245E2[495]][_0x245E2[494]], true)
    }

    function _0x26A3F() {
        mask2LM = game[_0x245E2[48]][_0x245E2[313]](0, 0);
        mask2LM[_0x245E2[314]](0x000000, 0.4);
        mask2LM[_0x245E2[315]](0, 0);
        mask2LM[_0x245E2[315]](100, 0);
        mask2LM[_0x245E2[315]](100, 100);
        mask2LM[_0x245E2[315]](0, 100);
        mask2LM[_0x245E2[316]]();
        mask2LM[_0x245E2[27]][_0x245E2[317]](8)
    }

    function _0x26A96() {
        bgUp[_0x245E2[196]] = 0;
        bgdown[_0x245E2[196]] = 300;
        this[_0x245E2[449]] = game[_0x245E2[48]][_0x245E2[159]](bgUp)[_0x245E2[158]]({
            y: -300
        }, 400, _0x245E2[157], true);
        this[_0x245E2[450]] = game[_0x245E2[48]][_0x245E2[159]](bgdown)[_0x245E2[158]]({
            y: 600
        }, 400, _0x245E2[157], true)
    }

    function _0x26AED() {
        bgUp = game[_0x245E2[48]][_0x245E2[66]](0, -300, _0x245E2[448]);
        bgdown = game[_0x245E2[48]][_0x245E2[66]](0, 600, _0x245E2[448])
    }

    function _0x26B44() {
        transitionLevelMap = _0x245E2[498];
        this[_0x245E2[324]][_0x245E2[47]][_0x245E2[46]](_0x245E2[135], true, false, this[_0x245E2[59]])
    }

    function _0x26B9B() {
        _0x24AFB(_0x245E2[499]);
        this[_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] = this[_0x245E2[447]][_0x245E2[424]];
        gotoLevel = this[_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0];
        if (gotoLevel == lastMapActive) {
            varShowAnimBtn = true;
            activateButtonsLevelMap = false
        } else {
            varShowAnimBtn = false;
            activateButtonsLevelMap = true
        }; if (finalGameCompleted == true) {
            varShowAnimBtn = false;
            activateButtonsLevelMap = false
        };
        this[_0x245E2[324]][_0x245E2[47]][_0x245E2[46]](_0x245E2[136], true, false, this[_0x245E2[59]])
    }

    function _0x26BF2() {
        blockClickBtns = true;
        game[_0x245E2[48]][_0x245E2[159]](windowCredits)[_0x245E2[158]]({
            alpha: 1,
            y: 0
        }, 150, _0x245E2[157], true)
    }

    function _0x26C49() {
        blockClickBtns = false;
        game[_0x245E2[48]][_0x245E2[159]](windowCredits)[_0x245E2[158]]({
            alpha: 0,
            y: -200
        }, 150, _0x245E2[157], true)
    }

    function _0x26CA0(_0x24639, _0x24690) {
        _0x245E2[13];
        Phaser[_0x245E2[15]][_0x245E2[14]](this, _0x24639, _0x24690);
        this[_0x245E2[324]] = _0x24639;
        this[_0x245E2[59]] = _0x24690;
        addjustOnce = true
    }

    function _0x26CF7() {
        if (pause == false && game_overVar == false) {
            this[_0x245E2[324]][_0x245E2[501]] = true;
            this[_0x245E2[324]][_0x245E2[72]][_0x245E2[502]][_0x245E2[48]](this[_0x245E2[251]], this);
            mask2[_0x245E2[194]] = true;
            resumeInGame[_0x245E2[194]] = true
        }
    }

    function _0x26D4E() {
        if (music[_0x245E2[503]]) {
            snd[_0x245E2[278]](pauseType)
        };
        if (game_overVar == false) {
            if (this[_0x245E2[23]] && this[_0x245E2[23]][_0x245E2[501]]) {
                this[_0x245E2[23]][_0x245E2[501]] = false;
                resumeInGame[_0x245E2[194]] = false;
                mask2[_0x245E2[194]] = false;
                this[_0x245E2[324]][_0x245E2[72]][_0x245E2[502]][_0x245E2[353]](this[_0x245E2[251]], this)
            };
            if (this[_0x245E2[324]] && this[_0x245E2[324]][_0x245E2[501]]) {
                this[_0x245E2[324]][_0x245E2[501]] = false;
                resumeInGame[_0x245E2[194]] = false;
                mask2[_0x245E2[194]] = false;
                this[_0x245E2[324]][_0x245E2[72]][_0x245E2[502]][_0x245E2[353]](this[_0x245E2[251]], this)
            } else {
                mask2[_0x245E2[194]] = false;
                pauseType = _0x245E2[147]
            };
            noRepeat = 1
        }
    }

    function _0x26DA5() {
        this[_0x245E2[324]][_0x245E2[47]][_0x245E2[321]](true, false, this[_0x245E2[59]])
    }

    function _0x26DFC() {
        return this[_0x245E2[324]][_0x245E2[501]]
    }

    function _0x26E53(_0x24690, _0x24639, _0x2473E, _0x24795, _0x246E7) {
        this[_0x245E2[276]] = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[66]](_0x2473E, _0x24795, _0x245E2[128], _0x24639);
        this[_0x245E2[276]][_0x245E2[151]]();
        this[_0x245E2[276]][_0x245E2[296]][_0x245E2[317]](0.5);
        this[_0x245E2[276]][_0x245E2[70]] = true;
        this[_0x245E2[276]][_0x245E2[72]][_0x245E2[71]] = 1;
        this[_0x245E2[276]][_0x245E2[72]][_0x245E2[73]] = true;
        this[_0x245E2[276]][_0x245E2[27]][_0x245E2[317]](0.8);
        switch (_0x246E7) {
            case _0x245E2[363]:
                locationBtnSound = _0x245E2[362];
                this[_0x245E2[276]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](function(_0x24639) {
                    snd[_0x245E2[446]](_0x24639)
                }, snd);
                break;
            case _0x245E2[366]:
                this[_0x245E2[276]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[505]], this);
                this[_0x245E2[276]][_0x245E2[68]] *= -1;
                break;
            case _0x245E2[274]:
                locationBtnSound = _0x245E2[277];
                this[_0x245E2[276]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](function(_0x24639) {
                    snd[_0x245E2[446]](_0x24639)
                }, snd);
                break;
            case _0x245E2[271]:
                this[_0x245E2[276]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[500]], this);
                break;
            case _0x245E2[268]:
                this[_0x245E2[276]][_0x245E2[49]][_0x245E2[74]][_0x245E2[48]](this[_0x245E2[251]], this);
                break
        }
    }

    function _0x26EAA(_0x24639, _0x24795, _0x2473E, _0x246E7, _0x247EC, _0x24843) {
        var _0x24690 = _0x24639[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](_0x247EC, _0x24843, _0x24795, {
            fill: _0x2473E
        });
        _0x24690[_0x245E2[506]] = _0x245E2[507];
        _0x24690[_0x245E2[296]][_0x245E2[317]](0.5, 0.5);
        _0x24690[_0x245E2[508]] = _0x246E7;
        _0x24690[_0x245E2[509]] = _0x245E2[510];
        return _0x24690
    }

    function _0x26F01() {}

    function _0x26F58() {
        this[_0x245E2[324]][_0x245E2[47]][_0x245E2[46]](_0x245E2[100], true, false, this[_0x245E2[59]])
    }

    function _0x26FAF(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        Phaser[_0x245E2[514]][_0x245E2[14]](this, _0x24639[_0x245E2[23]], _0x24690[_0x245E2[195]], _0x24690[_0x245E2[196]], _0x246E7[_0x245E2[513]]);
        this[_0x245E2[324]] = _0x24639;
        if (this[_0x245E2[324]][_0x245E2[179]][_0x246E7[_0x245E2[180]]]) {
            this[_0x245E2[324]][_0x245E2[179]][_0x246E7[_0x245E2[180]]][_0x245E2[48]](this);
            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[188]][_0x245E2[48]](bgmount);
            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[188]][_0x245E2[48]](bghill);
            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[188]][_0x245E2[48]](bgiarba)
        }
    }

    function _0x27006(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        RocketWW2[_0x245E2[512]][_0x245E2[14]](this, _0x24639, _0x24690, _0x246E7);
        this[_0x245E2[324]] = _0x24639;
        this[_0x245E2[515]] = _0x24690;
        this[_0x245E2[155]] = _0x246E7;
        this[_0x245E2[264]] = game[_0x245E2[72]][_0x245E2[519]][_0x245E2[518]](Phaser[_0x245E2[517]][_0x245E2[516]]);
        instObject = new RocketWW2[_0x245E2[138]](_0x24639, _0x24690, _0x246E7);
        instObject[_0x245E2[194]] = false;
        emitterSwich = undefined;
        this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[520]](this);
        this[_0x245E2[523]](this);
        playerCrashed = false;
        if (this[_0x245E2[324]][_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] == _0x245E2[524]) {
            tutorial1Var = true;
            activateSpaceBar = false;
            activateControls = true;
            playTimerTweenVar = undefined;
            noRepeat = 1
        } else {
            if (this[_0x245E2[324]][_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] == _0x245E2[525]) {
                activateSpaceBar = false;
                activateControls = true;
                playTimerTweenVar = false;
                noRepeat = 0
            } else {
                if (this[_0x245E2[324]][_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] == _0x245E2[526]) {
                    activateSpaceBar = false;
                    activateControls = true;
                    playTimerTweenVar = false;
                    noRepeat = 0
                } else {
                    if (this[_0x245E2[324]][_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] == _0x245E2[527]) {
                        tutorial2Var = true;
                        activateSpaceBar = true;
                        activateControls = false;
                        playTimerTweenVar = undefined;
                        noRepeat = 1
                    } else {
                        activateSpaceBar = true;
                        activateControls = true;
                        tutorial1Var = undefined;
                        tutorial2Var = undefined;
                        playTimerTweenVar = false;
                        noRepeat = 0
                    }
                }
            }
        }
    }

    function _0x2705D() {
        if (playTimerTweenVar == false && noRepeat == 1) {
            noRepeat = 0;
            managerGameObj[_0x245E2[153]]();
            playTimerTweenVar = undefined
        }
    }

    function _0x270B4() {
        _0x245E2[13];
        this[_0x245E2[528]]();
        if (pauseType == _0x245E2[146]) {
            if (downBtn) {
                downBtn[_0x245E2[194]] = true;
                upBtn[_0x245E2[194]] = true;
                inactiveBtn[_0x245E2[194]] = true
            };
            return
        };
        if (_s[_0x245E2[529]] >= 0) {
            if (_s[_0x245E2[530]] <= 0) {
                this[_0x245E2[535]][_0x245E2[534]](20, 20, this[_0x245E2[195]] / 100 - Math[_0x245E2[532]](_s[_0x245E2[531]]) * 10 + 6, this[_0x245E2[196]] / 100 - Math[_0x245E2[533]](_s[_0x245E2[531]]) * 10)
            } else {
                this[_0x245E2[535]][_0x245E2[534]](20, 20, this[_0x245E2[195]] / 100 - Math[_0x245E2[532]](_s[_0x245E2[531]]) * 10 + 6, this[_0x245E2[196]] / 100 - Math[_0x245E2[533]](_s[_0x245E2[531]]) * 10)
            }
        } else {
            if (_s[_0x245E2[530]] <= 0) {
                this[_0x245E2[535]][_0x245E2[534]](20, 20, this[_0x245E2[195]] / 100 - Math[_0x245E2[532]](_s[_0x245E2[531]]) * 10 + 6, this[_0x245E2[196]] / 100 - Math[_0x245E2[533]](_s[_0x245E2[531]]) * 10)
            } else {
                this[_0x245E2[535]][_0x245E2[534]](20, 20, this[_0x245E2[195]] / 100 - Math[_0x245E2[532]](_s[_0x245E2[531]]) * 10 + 6, this[_0x245E2[196]] / 100 - Math[_0x245E2[533]](_s[_0x245E2[531]]) * 10)
            }
        };
        this[_0x245E2[536]][_0x245E2[195]] = this[_0x245E2[195]] - (this[_0x245E2[68]] / 2) - 10;
        this[_0x245E2[536]][_0x245E2[196]] = this[_0x245E2[196]] - (this[_0x245E2[69]] / 2) - 20;
        if (this[_0x245E2[329]] == false && finishVar == false) {
            var _0x24639 = _s[_0x245E2[537]];
            if (this[_0x245E2[538]] == false) {
                this[_0x245E2[540]](this, this[_0x245E2[324]][_0x245E2[182]][_0x245E2[539]]);
                this[_0x245E2[540]](this, this[_0x245E2[324]][_0x245E2[182]][_0x245E2[541]]);
                this[_0x245E2[540]](this, this[_0x245E2[324]][_0x245E2[182]][_0x245E2[542]]);
                this[_0x245E2[540]](this, this[_0x245E2[324]][_0x245E2[182]][_0x245E2[543]]);
                this[_0x245E2[540]](this, this[_0x245E2[324]][_0x245E2[182]][_0x245E2[544]]);
                this[_0x245E2[545]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]]);
                this[_0x245E2[545]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]]);
                this[_0x245E2[548]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[547]]);
                this[_0x245E2[548]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]]);
                this[_0x245E2[548]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]]);
                this[_0x245E2[548]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]]);
                this[_0x245E2[548]](this[_0x245E2[535]], this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]]);
                if (activateControls == true) {
                    if (this[_0x245E2[553]][_0x245E2[253]][_0x245E2[552]] || jUpPressed == true) {
                        if (downBtn) {
                            downBtn[_0x245E2[194]] = false;
                            upBtn[_0x245E2[194]] = false;
                            inactiveBtn[_0x245E2[194]] = false;
                            playTimerTweenVar = false
                        };
                        tutorial1Var = false;
                        this[_0x245E2[555]](_0x245E2[554], 35, true);
                        if (_s[_0x245E2[556]] < _s[_0x245E2[557]]) {
                            _s[_0x245E2[556]] += _s[_0x245E2[558]]
                        } else {
                            _s[_0x245E2[556]] = _s[_0x245E2[557]]
                        }
                    } else {
                        if (this[_0x245E2[553]][_0x245E2[252]][_0x245E2[552]] || jDownPressed == true) {
                            if (downBtn) {
                                downBtn[_0x245E2[194]] = false;
                                upBtn[_0x245E2[194]] = false;
                                inactiveBtn[_0x245E2[194]] = false;
                                playTimerTweenVar = false
                            };
                            tutorial1Var = false;
                            this[_0x245E2[555]](_0x245E2[559], 35, true);
                            if (_s[_0x245E2[556]] > -_s[_0x245E2[557]]) {
                                _s[_0x245E2[556]] -= _s[_0x245E2[558]]
                            } else {
                                _s[_0x245E2[556]] = -_s[_0x245E2[557]]
                            }
                        } else {
                            if (_s[_0x245E2[556]] != 0) {
                                this[_0x245E2[555]](_0x245E2[560], 25, true);
                                if (_s[_0x245E2[556]] < 0) {
                                    _s[_0x245E2[556]] += 0.001
                                } else {
                                    if (_s[_0x245E2[556]] > 0) {
                                        _s[_0x245E2[556]] -= 0.001
                                    }
                                }; if (Math[_0x245E2[561]](_s[_0x245E2[556]]) < 0.01) {
                                    _s[_0x245E2[556]] = 0
                                }
                            } else {
                                this[_0x245E2[555]](_0x245E2[560], 25, true)
                            }
                        }
                    }
                };
                if (this[_0x245E2[264]][_0x245E2[263]]) {
                    planeBoost[_0x245E2[562]]();
                    _s[_0x245E2[265]] = false;
                    emitterSwich = false;
                    if (typeDisc != _0x245E2[563]) {
                        typeDisc = _0x245E2[563];
                        emitterPlane[_0x245E2[336]]();
                        emitterPlane[_0x245E2[564]](typeDisc, 60)
                    };
                    if (_s[_0x245E2[565]] < _s[_0x245E2[566]]) {
                        _s[_0x245E2[565]] += _s[_0x245E2[567]]
                    } else {
                        _s[_0x245E2[565]] -= _s[_0x245E2[567]]
                    }; if (Math[_0x245E2[561]](_s[_0x245E2[565]] - _s[_0x245E2[566]]) < _s[_0x245E2[567]]) {
                        _s[_0x245E2[565]] = _s[_0x245E2[566]]
                    }
                } else {
                    tutorial2Var = false;
                    playTimerTweenVar = false;
                    if (activateSpaceBar == false) {
                        _s[_0x245E2[265]] = false
                    } else {
                        activateControls = true;
                        this[_0x245E2[528]]();
                        _s[_0x245E2[265]] = true
                    }; if (activateSpaceBar == true) {
                        if (typeof emitterSwich == _0x245E2[568]) {
                            emitterSwich = false
                        };
                        if (emitterSwich == false) {
                            planeBoost[_0x245E2[122]]();
                            this[_0x245E2[569]]();
                            emitterSwich = true
                        };
                        if (_s[_0x245E2[565]] < _s[_0x245E2[570]]) {
                            _s[_0x245E2[565]] += _s[_0x245E2[571]]
                        } else {
                            _s[_0x245E2[565]] = _s[_0x245E2[570]]
                        }
                    }
                }; if (_s[_0x245E2[196]] < -20) {
                    if (Math[_0x245E2[561]](_s[_0x245E2[531]]) < 1.57) {
                        _s[_0x245E2[531]] += 0.1
                    } else {
                        _s[_0x245E2[531]] -= 0.1
                    }
                } else {
                    if (_s[_0x245E2[195]] < -20) {
                        if (_s[_0x245E2[531]] < 3.14) {
                            _s[_0x245E2[531]] += 0.1
                        } else {
                            _s[_0x245E2[531]] -= 0.1
                        }
                    } else {
                        if (_s[_0x245E2[195]] > 820) {
                            if (Math[_0x245E2[561]](_s[_0x245E2[531]]) < 0) {
                                _s[_0x245E2[531]] += 0.1
                            } else {
                                _s[_0x245E2[531]] -= 0.1
                            }
                        } else {
                            _s[_0x245E2[531]] += _s[_0x245E2[556]]
                        }
                    }
                };
                var _0x24690 = (_s[_0x245E2[565]] * 0.7 * Math[_0x245E2[532]](_s[_0x245E2[531]]));
                var _0x246E7 = (_s[_0x245E2[565]] * 1.3 * Math[_0x245E2[533]](_s[_0x245E2[531]]));
                if (_s[_0x245E2[529]] != _0x24690) {
                    if (_s[_0x245E2[529]] > _0x24690) {
                        _s[_0x245E2[529]] -= _s[_0x245E2[572]]
                    } else {
                        if (_s[_0x245E2[529]] < _0x24690) {
                            _s[_0x245E2[529]] += _s[_0x245E2[572]]
                        }
                    }; if (Math[_0x245E2[561]](_s[_0x245E2[529]] - _0x24690) <= _s[_0x245E2[572]]) {
                        _s[_0x245E2[529]] = _0x24690
                    }
                };
                if (_s[_0x245E2[530]] != _0x246E7) {
                    if (_s[_0x245E2[530]] > _0x246E7) {
                        _s[_0x245E2[530]] -= _s[_0x245E2[573]]
                    } else {
                        if (_s[_0x245E2[530]] < _0x246E7) {
                            _s[_0x245E2[530]] += _s[_0x245E2[573]]
                        }
                    }; if (Math[_0x245E2[561]](_s[_0x245E2[530]] - _0x246E7) <= _s[_0x245E2[573]]) {
                        _s[_0x245E2[530]] = _0x246E7
                    }
                };
                if (tutorial1Var == true) {
                    return
                };
                if (tutorial2Var == true) {
                    return
                } else {
                    if (spaceBtn != null) {
                        clearInterval(spaceBarTimer);
                        spaceBtn[_0x245E2[194]] = false
                    }
                };
                _s[_0x245E2[530]] += _s[_0x245E2[574]];
                _s[_0x245E2[530]] += _s[_0x245E2[575]];
                _s[_0x245E2[195]] += _s[_0x245E2[529]];
                _s[_0x245E2[196]] += _s[_0x245E2[530]];
                if (_s[_0x245E2[529]] >= 0) {
                    cloud1[_0x245E2[195]] -= _s[_0x245E2[529]] / 3.5
                } else {
                    cloud1[_0x245E2[195]] -= 0.1
                }; if (day == 17) {
                    bghill[_0x245E2[195]] -= _s[_0x245E2[529]] / 2;
                    bgiarba[_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5
                } else {
                    if (day == 18) {
                        bghill[_0x245E2[195]] -= _s[_0x245E2[529]] / 2;
                        bgiarba[_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5
                    } else {
                        if (day == 19) {
                            bghill[_0x245E2[195]] -= _s[_0x245E2[529]] / 2;
                            bgiarba[_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                            this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5
                        } else {
                            if (day == 20) {
                                bghill[_0x245E2[195]] -= _s[_0x245E2[529]] / 2;
                                bgiarba[_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5
                            } else {
                                if (day == 21) {
                                    bghill[_0x245E2[195]] -= _s[_0x245E2[529]] / 2;
                                    bgiarba[_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[195]] -= _s[_0x245E2[529]] * 1.5
                                } else {
                                    bghill[_0x245E2[195]] -= _s[_0x245E2[529]] / 2;
                                    bgiarba[_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[195]] -= _s[_0x245E2[529]];
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[195]] -= _s[_0x245E2[529]];
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]] -= _s[_0x245E2[529]];
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[195]] -= _s[_0x245E2[529]];
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[582]][_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[583]][_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[195]] -= _s[_0x245E2[529]] * 2;
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[195]] -= _s[_0x245E2[529]];
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[195]] -= _s[_0x245E2[529]];
                                    this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[195]] -= _s[_0x245E2[529]]
                                }
                            }
                        }
                    }
                }; if (this[_0x245E2[196]] < 270) {
                    this[_0x245E2[584]](_s[_0x245E2[530]] / 3)
                }
            } else {
                if (this[_0x245E2[538]] == true) {
                    this[_0x245E2[548]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]]);
                    this[_0x245E2[548]](this, this[_0x245E2[324]][_0x245E2[179]][_0x245E2[547]]);
                    this[_0x245E2[555]](_0x245E2[538], 30, true);
                    emitterPlane[_0x245E2[336]]();
                    if (this[_0x245E2[535]][_0x245E2[585]][_0x245E2[195]] >= 0) {
                        this[_0x245E2[535]][_0x245E2[586]][_0x245E2[195]] = 100;
                        this[_0x245E2[531]] += 0.05
                    } else {
                        this[_0x245E2[535]][_0x245E2[586]][_0x245E2[195]] = -100;
                        this[_0x245E2[531]] -= 0.1
                    };
                    this[_0x245E2[535]][_0x245E2[586]][_0x245E2[196]] += 3;
                    this[_0x245E2[535]][_0x245E2[587]][_0x245E2[196]] = 1000;
                    this[_0x245E2[535]][_0x245E2[585]][_0x245E2[195]] = 200;
                    this[_0x245E2[535]][_0x245E2[585]][_0x245E2[196]] = 200;
                    if (bgiarba[_0x245E2[196]] > 500) {
                        this[_0x245E2[584]](0.8)
                    }
                }
            }
        } else {
            if (this[_0x245E2[329]] == false && finishVar == true) {
                this[_0x245E2[588]]()
            }
        }
    }

    function _0x2710B(_0x24639) {
        bgmount[_0x245E2[196]] -= _0x24639;
        bghill[_0x245E2[196]] -= _0x24639;
        bgiarba[_0x245E2[196]] -= _0x24639;
        cloud1[_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[582]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[583]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[196]] -= _0x24639;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[196]] -= _0x24639
    }

    function _0x27162(_0x24639) {
        bgmount[_0x245E2[196]] -= yVar;
        bghill[_0x245E2[196]] -= yVar;
        bgiarba[_0x245E2[196]] -= yVar;
        cloud1[_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[577]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[579]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[580]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[581]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[582]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[583]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[549]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[216]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[546]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[550]][_0x245E2[196]] -= yVar;
        this[_0x245E2[324]][_0x245E2[179]][_0x245E2[551]][_0x245E2[196]] -= yVar
    }

    function _0x271B9(_0x24639) {
        _s = _0x24639;
        _s[_0x245E2[565]] = 0;
        _s[_0x245E2[566]] = 2.3;
        _s[_0x245E2[570]] = 4.3;
        _s[_0x245E2[567]] = 0.2;
        _s[_0x245E2[571]] = 0.03;
        _s[_0x245E2[556]] = 0;
        _s[_0x245E2[557]] = 0.04;
        _s[_0x245E2[558]] = 0.002;
        _s[_0x245E2[529]] = 1;
        _s[_0x245E2[530]] = 0;
        _s[_0x245E2[572]] = 1;
        _s[_0x245E2[573]] = 1;
        _s[_0x245E2[575]] = 0;
        _s[_0x245E2[590]] = 0;
        _s[_0x245E2[574]] = 0.4;
        _s[_0x245E2[591]] = _0x245E2[1];
        _s[_0x245E2[265]] = false;
        _s[_0x245E2[592]] = 70;
        _s[_0x245E2[593]] = 17;
        finishVar = false;
        bgmount[_0x245E2[195]] = -1334;
        bghill[_0x245E2[195]] = -1334;
        bgiarba[_0x245E2[195]] = -1334;
        _0x24639[_0x245E2[329]] = false;
        _0x24639[_0x245E2[594]] = false;
        emitterPlane[_0x245E2[564]](typeDisc, 60);
        _0x24639[_0x245E2[121]][_0x245E2[48]](_0x245E2[538], [12], 5, true);
        _0x24639[_0x245E2[121]][_0x245E2[48]](_0x245E2[560], [0, 1, 2, 3], 5, true);
        _0x24639[_0x245E2[121]][_0x245E2[48]](_0x245E2[559], [8, 8, 8, 9, 10, 11, 8, 9, 10, 11], 5, true);
        _0x24639[_0x245E2[121]][_0x245E2[48]](_0x245E2[559], [8, 8, 8, 9, 10, 11, 8, 9, 10, 11], 5, true);
        _0x24639[_0x245E2[121]][_0x245E2[48]](_0x245E2[554], [4, 4, 4, 4, 5, 6, 7, 4, 5, 6, 7], 5, true);
        _0x24639[_0x245E2[536]] = _0x24639[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](100, 100, _0x245E2[595]);
        _0x24639[_0x245E2[536]][_0x245E2[121]][_0x245E2[48]](_0x245E2[596], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 14, false);
        _0x24639[_0x245E2[296]][_0x245E2[295]](0.9, 0.5);
        _0x24639[_0x245E2[553]] = _0x24639[_0x245E2[23]][_0x245E2[72]][_0x245E2[519]][_0x245E2[597]]();
        _0x24639[_0x245E2[538]] = false
    }

    function _0x27210() {
        thisBoom[_0x245E2[335]]()
    }

    function _0x27267() {
        if (this[_0x245E2[195]] >= 900) {
            this[_0x245E2[324]][_0x245E2[345]]()
        };
        if (this[_0x245E2[535]]) {
            if (emitterSwich == false) {
                this[_0x245E2[569]]();
                emitterSwich = true
            };
            if (_s[_0x245E2[529]] >= 0 && _s[_0x245E2[530]] <= 0) {
                if (this[_0x245E2[531]] < 0) {
                    _s[_0x245E2[531]] += 0.03;
                    _s[_0x245E2[195]] += (_s[_0x245E2[529]]++) / 4;
                    _s[_0x245E2[196]] += _s[_0x245E2[530]]
                } else {
                    if (this[_0x245E2[531]] >= 0) {
                        _s[_0x245E2[531]] -= 0.03;
                        _s[_0x245E2[195]] += (_s[_0x245E2[529]]++) / 4;
                        _s[_0x245E2[196]] += _s[_0x245E2[530]]
                    }
                }
            } else {
                if (_s[_0x245E2[529]] < 0 && _s[_0x245E2[530]] < 0) {
                    if (_s[_0x245E2[556]] < _s[_0x245E2[557]]) {
                        _s[_0x245E2[556]] += _s[_0x245E2[558]]
                    } else {
                        _s[_0x245E2[556]] = _s[_0x245E2[557]]
                    };
                    _s[_0x245E2[531]] += _s[_0x245E2[556]] * 1.5;
                    var _0x24639 = (_s[_0x245E2[565]] * Math[_0x245E2[532]](_s[_0x245E2[531]]));
                    var _0x24690 = (_s[_0x245E2[565]] * Math[_0x245E2[533]](_s[_0x245E2[531]]));
                    if (_s[_0x245E2[529]] != _0x24639) {
                        if (_s[_0x245E2[529]] > _0x24639) {
                            _s[_0x245E2[529]] -= _s[_0x245E2[572]]
                        } else {
                            if (_s[_0x245E2[529]] < _0x24639) {
                                _s[_0x245E2[529]] += _s[_0x245E2[572]]
                            }
                        }; if (Math[_0x245E2[561]](_s[_0x245E2[529]] - _0x24639) <= _s[_0x245E2[572]]) {
                            _s[_0x245E2[529]] = _0x24639
                        }
                    };
                    if (_s[_0x245E2[530]] != _0x24690) {
                        if (_s[_0x245E2[530]] > _0x24690) {
                            _s[_0x245E2[530]] -= _s[_0x245E2[573]] / 3
                        } else {
                            if (_s[_0x245E2[530]] < _0x24690) {
                                _s[_0x245E2[530]] += _s[_0x245E2[573]] / 3
                            }
                        }; if (Math[_0x245E2[561]](_s[_0x245E2[530]] - _0x24690) <= _s[_0x245E2[573]]) {
                            _s[_0x245E2[530]] = _0x24690
                        }
                    };
                    _s[_0x245E2[530]] += _s[_0x245E2[574]];
                    _s[_0x245E2[530]] += _s[_0x245E2[575]];
                    _s[_0x245E2[195]] += _s[_0x245E2[529]];
                    _s[_0x245E2[196]] += _s[_0x245E2[530]]
                } else {
                    if (_s[_0x245E2[529]] < 0 && _s[_0x245E2[530]] > 0) {
                        if (_s[_0x245E2[556]] < _s[_0x245E2[557]]) {
                            _s[_0x245E2[556]] += _s[_0x245E2[558]]
                        } else {
                            _s[_0x245E2[556]] = _s[_0x245E2[557]]
                        };
                        _s[_0x245E2[531]] -= _s[_0x245E2[556]] * 2;
                        var _0x24639 = (_s[_0x245E2[565]] * 1.5 * Math[_0x245E2[532]](_s[_0x245E2[531]]));
                        var _0x24690 = (_s[_0x245E2[565]] * 1.3 * Math[_0x245E2[533]](_s[_0x245E2[531]]));
                        if (_s[_0x245E2[529]] != _0x24639) {
                            if (_s[_0x245E2[529]] > _0x24639) {
                                _s[_0x245E2[529]] -= _s[_0x245E2[572]]
                            } else {
                                if (_s[_0x245E2[529]] < _0x24639) {
                                    _s[_0x245E2[529]] += _s[_0x245E2[572]]
                                }
                            }; if (Math[_0x245E2[561]](_s[_0x245E2[529]] - _0x24639) <= _s[_0x245E2[572]]) {
                                _s[_0x245E2[529]] = _0x24639
                            }
                        };
                        if (_s[_0x245E2[530]] != _0x24690) {
                            if (_s[_0x245E2[530]] > _0x24690) {
                                _s[_0x245E2[530]] -= _s[_0x245E2[573]] / 3
                            } else {
                                if (_s[_0x245E2[530]] < _0x24690) {
                                    _s[_0x245E2[530]] += _s[_0x245E2[573]] / 3
                                }
                            }; if (Math[_0x245E2[561]](_s[_0x245E2[530]] - _0x24690) <= _s[_0x245E2[573]]) {
                                _s[_0x245E2[530]] = _0x24690
                            }
                        };
                        _s[_0x245E2[195]] += _s[_0x245E2[529]];
                        _s[_0x245E2[196]] += _s[_0x245E2[530]]
                    } else {
                        if (_s[_0x245E2[529]] > 0 && _s[_0x245E2[530]] > 0) {
                            if (this[_0x245E2[531]] < 0) {
                                _s[_0x245E2[531]] += 0.03;
                                _s[_0x245E2[195]] += (_s[_0x245E2[529]]++) / 4;
                                _s[_0x245E2[196]] += _s[_0x245E2[530]]
                            } else {
                                if (this[_0x245E2[531]] >= 0) {
                                    _s[_0x245E2[531]] -= 0.03;
                                    _s[_0x245E2[195]] += (_s[_0x245E2[529]]++) / 4;
                                    _s[_0x245E2[196]] += _s[_0x245E2[530]]
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function _0x272BE() {
        this[_0x245E2[344]]()
    }

    function _0x27315() {
        finishVar = true
    }

    function _0x2736C(_0x24639, _0x2473E) {
        var _0x24690 = Math[_0x245E2[561]](_0x2473E * Math[_0x245E2[532]](this[_0x245E2[531]]));
        var _0x246E7 = Math[_0x245E2[561]](_0x2473E * Math[_0x245E2[533]](this[_0x245E2[531]]));
        _0x24639[_0x245E2[195]] = _0x24690;
        _0x24639[_0x245E2[196]] = _0x246E7
    }

    function _0x273C3(_0x246E7, _0x24690, _0x24639) {
        this[_0x245E2[121]][_0x245E2[122]](_0x246E7, _0x24690, _0x24639)
    }

    function _0x2741A(_0x246E7, _0x2473E) {
        if (_0x2473E) {
            var _0x24639 = _0x2473E[_0x245E2[195]] + this[_0x245E2[324]][_0x245E2[179]][_0x245E2[578]][_0x245E2[195]];
            var _0x24690 = _0x2473E[_0x245E2[196]] + this[_0x245E2[324]][_0x245E2[179]][_0x245E2[576]][_0x245E2[196]];
            if (_0x2473E[_0x245E2[180]] = _0x245E2[576]) {
                if (_0x2473E[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x2473E) && (_0x246E7[_0x245E2[195]] + _0x246E7[_0x245E2[68]] * 2.15 <= _0x24639)) {
                        if (_0x2473E[_0x245E2[155]][_0x245E2[602]] == _0x245E2[603]) {
                            this[_0x245E2[47]] = _0x245E2[604];
                            this[_0x245E2[538]] = true;
                            emitterPlane[_0x245E2[605]]();
                            this[_0x245E2[606]]()
                        }
                    } else {
                        if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x2473E) && (_0x246E7[_0x245E2[195]] >= (_0x24639 + (_0x2473E[_0x245E2[68]] - _0x246E7[_0x245E2[68]]) + 15))) {
                            if (_0x2473E[_0x245E2[155]][_0x245E2[602]] == _0x245E2[603]) {
                                this[_0x245E2[47]] = _0x245E2[604];
                                this[_0x245E2[538]] = true;
                                emitterPlane[_0x245E2[605]]();
                                this[_0x245E2[606]]()
                            }
                        } else {
                            if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x2473E) && (this[_0x245E2[329]] == this[_0x245E2[538]]) && _0x2473E[_0x245E2[155]][_0x245E2[199]] == 1) {
                                this[_0x245E2[47]] = _0x245E2[607];
                                checkCircle[_0x245E2[122]]();
                                instObject[_0x245E2[608]](_0x2473E, this)
                            }
                        }
                    }
                } else {
                    if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x2473E) && ((_0x246E7[_0x245E2[196]] - _0x246E7[_0x245E2[69]] / 2) <= _0x24690)) {
                        if (_0x2473E[_0x245E2[155]][_0x245E2[602]] == _0x245E2[603]) {
                            this[_0x245E2[47]] = _0x245E2[604];
                            this[_0x245E2[538]] = true;
                            emitterPlane[_0x245E2[605]]();
                            this[_0x245E2[606]]()
                        }
                    } else {
                        if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x2473E) && (_0x246E7[_0x245E2[196]] >= (_0x24690 + (_0x2473E[_0x245E2[69]] - _0x246E7[_0x245E2[69]]) + 15))) {
                            if (_0x2473E[_0x245E2[155]][_0x245E2[602]] == _0x245E2[603]) {
                                this[_0x245E2[47]] = _0x245E2[604];
                                this[_0x245E2[538]] = true;
                                emitterPlane[_0x245E2[605]]();
                                this[_0x245E2[606]]()
                            }
                        } else {
                            if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x2473E) && (this[_0x245E2[329]] == this[_0x245E2[538]]) && _0x2473E[_0x245E2[155]][_0x245E2[199]] == 1) {
                                this[_0x245E2[47]] = _0x245E2[607];
                                checkCircle[_0x245E2[122]]();
                                instObject[_0x245E2[608]](_0x2473E, this)
                            }
                        }
                    }
                }
            }
        }
    }

    function _0x27471() {
        if (music[_0x245E2[273]] != 0) {
            snd[_0x245E2[278]](_0x245E2[443])
        };
        game_overVar = true;
        tweenFill[_0x245E2[562]]();
        var _0x24639 = Math[_0x245E2[312]]() * (-70) + 15;
        var _0x24690 = Math[_0x245E2[312]]() * (-100);
        pilot = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[66]](player[_0x245E2[195]] + _0x24639, player[_0x245E2[196]] + _0x24690, _0x245E2[128], _0x245E2[609]);
        this[_0x245E2[610]]();
        this[_0x245E2[611]] = game[_0x245E2[48]][_0x245E2[159]](pilot)[_0x245E2[158]]({
            y: 500
        }, 10000, _0x245E2[157], true)
    }

    function _0x274C8() {
        this[_0x245E2[612]] = game[_0x245E2[48]][_0x245E2[159]](pilot)[_0x245E2[158]]({
            rotation: +0.2
        }, 1500, _0x245E2[157], true);
        this[_0x245E2[612]][_0x245E2[161]][_0x245E2[48]](this[_0x245E2[613]], this)
    }

    function _0x2751F() {
        this[_0x245E2[614]] = game[_0x245E2[48]][_0x245E2[159]](pilot)[_0x245E2[158]]({
            rotation: -0.2
        }, 1500, _0x245E2[157], true);
        this[_0x245E2[614]][_0x245E2[161]][_0x245E2[48]](this[_0x245E2[610]], this)
    }

    function _0x27576() {
        var _0x24639 = this[_0x245E2[23]][_0x245E2[616]][_0x245E2[615]](2, 6);
        typeDisc = _0x245E2[617] + _0x24639;
        emitterPlane[_0x245E2[336]]();
        emitterPlane[_0x245E2[564]](typeDisc, 10)
    }

    function _0x275CD(_0x24639, _0x24690) {
        if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](this, _0x24690, this[_0x245E2[618]])) {}
    }

    function _0x27624(_0x24639, _0x24690) {
        if (_0x24690[_0x245E2[194]] == true) {
            coin[_0x245E2[122]]();
            _0x24690[_0x245E2[194]] = false
        }
    }

    function _0x2767B(_0x24639, _0x24690) {
        if (this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[601]](_0x24639, _0x24690, this[_0x245E2[619]])) {
            this[_0x245E2[443]]()
        }
    }

    function _0x276D2(_0x24639, _0x24690) {
        playerCrashed = true;
        if (_0x24690[_0x245E2[620]] == _0x245E2[621]) {
            _0x24690[_0x245E2[121]][_0x245E2[122]](_0x245E2[622], 5, true);
            _0x24690[_0x245E2[535]][_0x245E2[623]][_0x245E2[196]] = 40;
            if (tweenUp) {
                tweenUp[_0x245E2[562]]()
            };
            if (tweenDown) {
                tweenDown[_0x245E2[562]]()
            }
        } else {
            if (_0x24690[_0x245E2[620]] == _0x245E2[233]) {
                fire[_0x245E2[194]] = true;
                fire[_0x245E2[195]] = _0x24690[_0x245E2[195]] + 50;
                fire[_0x245E2[196]] = _0x24690[_0x245E2[196]] + 15
            } else {
                if (_0x24690[_0x245E2[620]] == _0x245E2[624]) {} else {
                    if (_0x24690[_0x245E2[620]] == _0x245E2[625]) {} else {
                        if (_0x24690[_0x245E2[620]] == _0x245E2[235]) {
                            fire[_0x245E2[194]] = true;
                            fire[_0x245E2[195]] = _0x24690[_0x245E2[195]];
                            fire[_0x245E2[196]] = _0x24690[_0x245E2[196]]
                        } else {
                            if (_0x24690[_0x245E2[620]] == _0x245E2[214]) {
                                fire[_0x245E2[194]] = true;
                                fire[_0x245E2[195]] = _0x24690[_0x245E2[195]] + 15;
                                fire[_0x245E2[196]] = _0x24690[_0x245E2[196]]
                            } else {
                                if (_0x24690[_0x245E2[620]] == _0x245E2[239]) {
                                    fire[_0x245E2[194]] = true;
                                    fire[_0x245E2[195]] = _0x24690[_0x245E2[195]];
                                    fire[_0x245E2[196]] = _0x24690[_0x245E2[196]] - 25
                                } else {
                                    if (_0x24690[_0x245E2[620]] == _0x245E2[238]) {
                                        fire[_0x245E2[194]] = true;
                                        fire[_0x245E2[195]] = _0x24690[_0x245E2[195]];
                                        fire[_0x245E2[196]] = _0x24690[_0x245E2[196]]
                                    } else {
                                        if (_0x24690[_0x245E2[620]] == _0x245E2[626]) {
                                            fire[_0x245E2[194]] = true;
                                            fire[_0x245E2[195]] = _0x24690[_0x245E2[195]] + 5;
                                            fire[_0x245E2[196]] = _0x24690[_0x245E2[196]]
                                        } else {
                                            if (_0x24690[_0x245E2[620]] == _0x245E2[229]) {
                                                fire[_0x245E2[194]] = true;
                                                fire[_0x245E2[195]] = _0x24690[_0x245E2[195]] + 10;
                                                fire[_0x245E2[196]] = _0x24690[_0x245E2[196]]
                                            } else {
                                                if (_0x24690[_0x245E2[620]] == _0x245E2[231]) {} else {
                                                    _0x24690[_0x245E2[627]]()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function _0x27729() {
        _0x245E2[13];
        playerCrashed = true;
        if (music[_0x245E2[273]] != 0) {
            snd[_0x245E2[278]](_0x245E2[443])
        };
        tweenFill[_0x245E2[562]]();
        game_overVar = true;
        player[_0x245E2[627]]();
        this[_0x245E2[538]] = _0x245E2[152];
        emitterPlane[_0x245E2[336]]();
        this[_0x245E2[536]][_0x245E2[121]][_0x245E2[122]](_0x245E2[596], 20, false);
        this[_0x245E2[23]][_0x245E2[50]][_0x245E2[49]][_0x245E2[48]](Phaser[_0x245E2[63]][_0x245E2[62]] * 1.3, this[_0x245E2[324]][_0x245E2[301]], this)
    }

    function _0x27780(_0x24639, _0x24690) {
        _0x245E2[13];
        this[_0x245E2[324]] = _0x24639;
        this[_0x245E2[447]] = _0x24690
    }

    function _0x277D7(_0x24639) {
        _0x245E2[13];
        this[_0x245E2[423]] = _0x24639;
        this[_0x245E2[423]] = game[_0x245E2[48]][_0x245E2[66]](this[_0x245E2[447]][_0x245E2[195]] + 13, this[_0x245E2[447]][_0x245E2[196]], _0x245E2[89]);
        if (this[_0x245E2[447]][_0x245E2[419]] != 1) {
            this[_0x245E2[423]][_0x245E2[121]][_0x245E2[48]](_0x245E2[628], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[628], 2, 2), 10, false)
        };
        if (this[_0x245E2[447]][_0x245E2[419]] == 0) {
            this[_0x245E2[423]][_0x245E2[121]][_0x245E2[48]](_0x245E2[628], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[628], 1, 1), 10, false);
            this[_0x245E2[423]][_0x245E2[168]] = this[_0x245E2[447]][_0x245E2[168]];
            this[_0x245E2[423]][_0x245E2[70]] = true;
            this[_0x245E2[423]][_0x245E2[72]][_0x245E2[73]] = true;
            game[_0x245E2[48]][_0x245E2[629]](this[_0x245E2[423]]);
            var _0x2473E = {
                font: _0x245E2[630],
                fill: _0x245E2[631],
                wordWrap: true,
                wordWrapWidth: this[_0x245E2[423]][_0x245E2[68]],
                align: _0x245E2[289]
            };
            var _0x247EC = this[_0x245E2[423]][_0x245E2[168]];
            var _0x24795 = _0x247EC[_0x245E2[3]](_0x245E2[276]);
            var _0x24690 = _0x24795[1][_0x245E2[326]]();
            var _0x246E7 = Number(_0x24690);
            if (_0x246E7 < 10) {
                text = game[_0x245E2[48]][_0x245E2[40]](this[_0x245E2[447]][_0x245E2[195]] + 36, this[_0x245E2[447]][_0x245E2[196]] + 15, _0x24690, _0x2473E)
            } else {
                if (_0x246E7 >= 10) {
                    text = game[_0x245E2[48]][_0x245E2[40]](this[_0x245E2[447]][_0x245E2[195]] + 25, this[_0x245E2[447]][_0x245E2[196]] + 15, _0x24690, _0x2473E)
                }
            };
            btnsUnlockedGroup[_0x245E2[48]](this[_0x245E2[423]])
        };
        this[_0x245E2[423]][_0x245E2[121]][_0x245E2[122]](_0x245E2[628]);
        this[_0x245E2[324]][_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0] = _0x245E2[323] + _0x246E7;
        gotoLevel = this[_0x245E2[324]][_0x245E2[59]][_0x245E2[170]][_0x245E2[308]][0];
        this[_0x245E2[423]][_0x245E2[424]] = gotoLevel;
        this[_0x245E2[423]][_0x245E2[425]] = _0x246E7
    }

    function _0x2782E() {}

    function _0x27885(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        RocketWW2[_0x245E2[512]][_0x245E2[14]](this, _0x24639, _0x24690, _0x246E7);
        this[_0x245E2[324]] = _0x24639;
        this[_0x245E2[155]] = _0x246E7;
        this[_0x245E2[180]] = _0x246E7[_0x245E2[180]];
        this[_0x245E2[620]] = _0x246E7[_0x245E2[620]];
        this[_0x245E2[324]][_0x245E2[522]][_0x245E2[521]][_0x245E2[520]](this);
        this[_0x245E2[535]][_0x245E2[633]] = true;
        this[_0x245E2[535]][_0x245E2[634]] = false;
        this[_0x245E2[535]][_0x245E2[635]] = false;
        this[_0x245E2[636]] = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[180]]();
        switch (_0x246E7[_0x245E2[620]]) {
            case _0x245E2[638]:
                cerc1 = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[637]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[640]:
                cerc2 = this;
                test = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[639]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[642]:
                cerc3 = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[641]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[644]:
                cerc4 = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[643]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[645]:
                cerc5 = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[639]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[647]:
                arrCirclesUp[_0x245E2[173]](this);
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[646]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[649]:
                arrCirclesUp[_0x245E2[173]](this);
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[648]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[651]:
                arrCirclesUp[_0x245E2[173]](this);
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[650]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[653]:
                arrCirclesUp[_0x245E2[173]](this);
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[652]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[654]:
                arrCirclesUp[_0x245E2[173]](this);
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[648]);
                if (this[_0x245E2[155]][_0x245E2[515]] == _0x245E2[600]) {
                    this[_0x245E2[531]] = 1.57;
                    this[_0x245E2[535]][_0x245E2[534]](130, 10, -100, 0);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                } else {
                    this[_0x245E2[535]][_0x245E2[534]](10, 130, -3, 10);
                    this[_0x245E2[535]][_0x245E2[635]] = true;
                    this[_0x245E2[27]][_0x245E2[317]](0.72)
                };
                break;
            case _0x245E2[621]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[655], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[656], 1, 4), 25, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[622], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[656], 5, 6), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[655], 40, true);
                this[_0x245E2[657]]();
                this[_0x245E2[296]][_0x245E2[317]](0);
                this[_0x245E2[535]][_0x245E2[534]](60, 60, 0, 0);
                this[_0x245E2[535]][_0x245E2[635]] = true;
                break;
            case _0x245E2[660]:
                balloonBomb1 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[658], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[658], 1, 3), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[658], 15, true);
                this[_0x245E2[535]][_0x245E2[534]](40, 70, 10, 5);
                this[_0x245E2[659]](this);
                break;
            case _0x245E2[663]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[661], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[661], 1, 6), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[661], 17, true);
                this[_0x245E2[535]][_0x245E2[534]](30, 50, 15, 10);
                this[_0x245E2[662]](this);
                break;
            case _0x245E2[666]:
                duck1 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[664], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[664], 1, 5), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[664], 9, true);
                this[_0x245E2[296]][_0x245E2[317]](0);
                this[_0x245E2[535]][_0x245E2[534]](30, 25, 0, 10);
                this[_0x245E2[535]][_0x245E2[635]] = true;
                this[_0x245E2[665]](this);
                break;
            case _0x245E2[667]:
                duck2 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[664], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[664], 1, 5), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[664], 9, true);
                this[_0x245E2[296]][_0x245E2[317]](0);
                this[_0x245E2[535]][_0x245E2[534]](30, 25, 0, 10);
                this[_0x245E2[535]][_0x245E2[635]] = true;
                this[_0x245E2[665]](this);
                break;
            case _0x245E2[624]:
                ozn1 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[668], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[668], 1, 3), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[668], 8, true);
                this[_0x245E2[535]][_0x245E2[534]](45, 30, 10, 10);
                this[_0x245E2[669]](this);
                break;
            case _0x245E2[672]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[670], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[670], 1, 4), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[670], 10, true);
                this[_0x245E2[671]]();
                break;
            case _0x245E2[675]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[673], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[673], 1, 8), 25, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[673], 10, true);
                this[_0x245E2[674]]();
                break;
            case _0x245E2[677]:
                target1 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[676], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[676], 1, 4), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[676], 4, true);
                this[_0x245E2[535]][_0x245E2[534]](30, 50, 10, 10);
                this[_0x245E2[535]][_0x245E2[635]] = true;
                break;
            case _0x245E2[678]:
                target2 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[676], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[676], 1, 4), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[676], 4, true);
                this[_0x245E2[535]][_0x245E2[534]](30, 50, 10, 10);
                this[_0x245E2[535]][_0x245E2[635]] = true;
                break;
            case _0x245E2[241]:
                tapMobile = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[679], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[680], 1, 2), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[679], 2, true);
                this[_0x245E2[535]][_0x245E2[534]](1, 1, 3000, 3000);
                tapMobile[_0x245E2[531]] = 3.14;
                tutorialGroup = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[180]]();
                tutorialGroup[_0x245E2[48]](tapMobile);
                break;
            case _0x245E2[625]:
                zeppelin1 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[681], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[682], 1, 2), 5, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[683], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[682], 1, 4), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[681], 5, true);
                this[_0x245E2[535]][_0x245E2[534]](90, 25, 10, 10);
                this[_0x245E2[684]](this);
                break;
            case _0x245E2[212]:
                fire = this;
                fire[_0x245E2[194]] = false;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[212], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[685], 1, 8), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[212], 15, true);
                this[_0x245E2[535]][_0x245E2[534]](1, 1, 7000, 7000);
                break;
            case _0x245E2[690]:
                balonMov1 = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[686], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[688], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 3), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[686], 5, true);
                this[_0x245E2[535]][_0x245E2[534]](50, 60, 10, 10);
                this[_0x245E2[689]](this);
                break;
            case _0x245E2[692]:
                balonMov2 = this;
                this[_0x245E2[215]] = _0x245E2[560];
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[686], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[688], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 3), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[686], 5, true);
                this[_0x245E2[535]][_0x245E2[534]](50, 60, 10, 10);
                this[_0x245E2[691]](this);
                break;
            case _0x245E2[693]:
                balonMov3 = this;
                this[_0x245E2[693]] = _0x245E2[560];
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[686], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[688], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 3), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[686], 5, true);
                this[_0x245E2[535]][_0x245E2[534]](50, 60, 10, 10);
                this[_0x245E2[691]](this);
                break;
            case _0x245E2[694]:
                balonMov4 = this;
                this[_0x245E2[694]] = _0x245E2[560];
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[686], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[688], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[687], 1, 3), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[686], 5, true);
                this[_0x245E2[535]][_0x245E2[534]](50, 60, 10, 10);
                this[_0x245E2[691]](this);
                break;
            case _0x245E2[695]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[695], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[695], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[698]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[698], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[698], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[699]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[699], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[699], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[700]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[700], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[700], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[701]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[701], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[701], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[702]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[702], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[702], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[703]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[703], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[703], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[704]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[704], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[704], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[705]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[705], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[696], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[705], 13, true);
                this[_0x245E2[535]][_0x245E2[534]](20, 30, 3, 3);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[707]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[706]);
                cloud1 = this;
                break;
            case _0x245E2[708]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[708], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[709], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[708], 23, true);
                break;
            case _0x245E2[710]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[710], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[709], 2, 2), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[710], 23, true);
                break;
            case _0x245E2[711]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[711], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[709], 3, 3), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[711], 23, true);
                break;
            case _0x245E2[712]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[712], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[709], 4, 4), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[712], 23, true);
                break;
            case _0x245E2[713]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[713], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[709], 5, 5), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[713], 23, true);
                break;
            case _0x245E2[243]:
                upBtn = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[714], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[715], 1, 2), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[714], 2, true);
                break;
            case _0x245E2[242]:
                downBtn = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[716], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[717], 1, 2), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[716], 2, true);
                break;
            case _0x245E2[244]:
                spaceBtn = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[718], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[719], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[720], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[719], 1, 2), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[718], 2, false);
                spaceBarTimer = setInterval(function() {
                    spaceBtn[_0x245E2[121]][_0x245E2[122]](_0x245E2[720], 2, false)
                }, 3000);
                break;
            case _0x245E2[240]:
                inactiveBtn = this;
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[721], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[722], 1, 1), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[721], 3, true);
                break;
            case _0x245E2[219]:
                consoleGM = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[463]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[220]:
                cadetWin = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[469]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[221]:
                cadetlose = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[466]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[222]:
                siglaGM = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[464]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[223]:
                avionBurnGM = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[467]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[224]:
                nextButton = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[365]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[225]:
                btnReplay = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[723]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[226]:
                buttonHome = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[724]);
                this[_0x245E2[194]] = false;
                break;
            case _0x245E2[229]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[725]);
                this[_0x245E2[535]][_0x245E2[534]](50, 100, 20, 10);
                break;
            case _0x245E2[234]:
                this[_0x245E2[121]][_0x245E2[48]](_0x245E2[726], Phaser[_0x245E2[120]][_0x245E2[119]](_0x245E2[727], 1, 6), 5, true);
                this[_0x245E2[121]][_0x245E2[122]](_0x245E2[726], 11, true);
                break;
            case _0x245E2[233]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[233]);
                this[_0x245E2[535]][_0x245E2[534]](40, 100, 30, 10);
                break;
            case _0x245E2[235]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[235]);
                this[_0x245E2[535]][_0x245E2[534]](20, 100, 5, 10);
                this[_0x245E2[535]][_0x245E2[697]] = false;
                break;
            case _0x245E2[236]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[236]);
                this[_0x245E2[535]][_0x245E2[534]](40, 100, 30, 10);
                break;
            case _0x245E2[237]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[237]);
                this[_0x245E2[535]][_0x245E2[534]](40, 100, 30, 10);
                break;
            case _0x245E2[238]:
                moara = this;
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[238]);
                this[_0x245E2[535]][_0x245E2[534]](40, 100, 30, 10);
                break;
            case _0x245E2[214]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[728]);
                this[_0x245E2[535]][_0x245E2[534]](35, 100, 15, 10);
                break;
            case _0x245E2[626]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[729]);
                this[_0x245E2[535]][_0x245E2[534]](30, 100, 0, 5);
                break;
            case _0x245E2[231]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[730]);
                this[_0x245E2[535]][_0x245E2[534]](0, 0, 0, 0);
                break;
            case _0x245E2[232]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[232]);
                this[_0x245E2[535]][_0x245E2[534]](20, 90, 0, 0);
                break;
            case _0x245E2[239]:
                eliceMoara = this;
                this[_0x245E2[296]][_0x245E2[317]](0.5);
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[731]);
                this[_0x245E2[535]][_0x245E2[534]](40, 100, 30, 10);
                break;
            case _0x245E2[247]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[732]);
                break;
            case _0x245E2[245]:
                this[_0x245E2[275]](_0x245E2[128], _0x245E2[733]);
                break;
            case _0x245E2[228]:
                levelProperties = this;
                break
        }
    }

    function _0x278DC() {
        this[_0x245E2[734]](this);
        if (eliceMoara) {
            eliceMoara[_0x245E2[531]] += 0.002
        };
        if (duck1) {
            duck1[_0x245E2[195]] -= 0.1
        };
        if (duck2) {
            duck2[_0x245E2[195]] -= 0.1
        };
        if (zeppelin1) {
            zeppelin1[_0x245E2[195]] -= 0.01
        };
        if (balonMov1) {
            balonMov1[_0x245E2[195]] -= 0.01
        };
        if (balonMov2) {
            if (day == 12 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[560]) {
                this[_0x245E2[215]] = _0x245E2[735];
                balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 12 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
                balonMov2[_0x245E2[196]] += 1.5 * 1.3
            } else {
                if (day == 12 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                    this[_0x245E2[215]] = _0x245E2[335];
                    balonMov2[_0x245E2[335]]()
                }
            }; if (day == 13 && cerc5[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[215]] == _0x245E2[560]) {
                this[_0x245E2[215]] = _0x245E2[735];
                balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 13 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
                balonMov2[_0x245E2[196]] += 1.5 * 1.3
            } else {
                if (day == 13 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                    this[_0x245E2[215]] = _0x245E2[335];
                    balonMov2[_0x245E2[335]]()
                }
            }; if (day == 15 && cerc2[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[215]] == _0x245E2[560]) {
                this[_0x245E2[215]] = _0x245E2[735];
                balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 15 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
                balonMov2[_0x245E2[196]] += 1.5 * 1.3
            } else {
                if (day == 15 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                    this[_0x245E2[215]] = _0x245E2[335];
                    balonMov2[_0x245E2[335]]()
                }
            }; if (day == 16 && cerc2[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[215]] == _0x245E2[560]) {
                this[_0x245E2[215]] = _0x245E2[735];
                balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 16 && cerc3[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[693]] == _0x245E2[560]) {
                this[_0x245E2[693]] = _0x245E2[735];
                balonMov3[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 16 && cerc4[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[694]] == _0x245E2[560]) {
                this[_0x245E2[694]] = _0x245E2[735];
                balonMov4[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 16 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
                balonMov2[_0x245E2[196]] += 1.5 * 2
            } else {
                if (day == 16 && cerc1[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                    this[_0x245E2[215]] = _0x245E2[335];
                    balonMov2[_0x245E2[335]]()
                }
            }; if (day == 16 && cerc2[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[693]] == _0x245E2[735] && balonMov3[_0x245E2[196]] <= 450) {
                balonMov3[_0x245E2[196]] += 1.5 * 2
            } else {
                if (day == 16 && cerc2[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[693]] == _0x245E2[735] && balonMov3[_0x245E2[196]] > 450) {
                    this[_0x245E2[215]] = _0x245E2[335];
                    balonMov3[_0x245E2[335]]()
                }
            }; if (day == 16 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[694]] == _0x245E2[735] && balonMov4[_0x245E2[196]] <= 450) {
                balonMov4[_0x245E2[196]] += 1.5 * 2
            } else {
                if (day == 16 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[694]] == _0x245E2[735] && balonMov4[_0x245E2[196]] > 450) {
                    this[_0x245E2[215]] = _0x245E2[335];
                    balonMov4[_0x245E2[335]]()
                }
            }; if (day == 17 && cerc2[_0x245E2[155]][_0x245E2[199]] == 0 && cerc3[_0x245E2[155]][_0x245E2[199]] == 1 && target1[_0x245E2[194]] == true) {
                this[_0x245E2[215]] = _0x245E2[335];
                target1[_0x245E2[627]]()
            };
            if (day == 18 && cerc5[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[215]] == _0x245E2[560]) {
                this[_0x245E2[215]] = _0x245E2[735];
                balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
                if (this[_0x245E2[736]]) {
                    this[_0x245E2[736]][_0x245E2[562]]()
                };
                if (this[_0x245E2[737]]) {
                    this[_0x245E2[737]][_0x245E2[562]]()
                }
            };
            if (day == 18 && cerc4[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
                balonMov2[_0x245E2[196]] += 1.5 * 2
            } else {
                if (day == 18 && cerc4[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                    this[_0x245E2[692]] = _0x245E2[335];
                    balonMov2[_0x245E2[335]]()
                }
            }
        };
        if (day == 19 && cerc4[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[215]] == _0x245E2[560]) {
            this[_0x245E2[215]] = _0x245E2[735];
            balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
            if (this[_0x245E2[736]]) {
                this[_0x245E2[736]][_0x245E2[562]]()
            };
            if (this[_0x245E2[737]]) {
                this[_0x245E2[737]][_0x245E2[562]]()
            };
            balonMov3[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
            balonMov4[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false)
        };
        if (day == 19 && cerc4[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[693]] == _0x245E2[560]) {
            this[_0x245E2[693]] = _0x245E2[735];
            balonMov3[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
            if (this[_0x245E2[736]]) {
                this[_0x245E2[736]][_0x245E2[562]]()
            };
            if (this[_0x245E2[737]]) {
                this[_0x245E2[737]][_0x245E2[562]]()
            }
        };
        if (day == 19 && cerc4[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[694]] == _0x245E2[560]) {
            this[_0x245E2[694]] = _0x245E2[735];
            balonMov4[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
            if (this[_0x245E2[736]]) {
                this[_0x245E2[736]][_0x245E2[562]]()
            };
            if (this[_0x245E2[737]]) {
                this[_0x245E2[737]][_0x245E2[562]]()
            }
        };
        if (day == 19 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
            balonMov2[_0x245E2[196]] += 1.5 * 2
        } else {
            if (day == 19 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                this[_0x245E2[215]] = _0x245E2[335];
                balonMov2[_0x245E2[335]]()
            }
        }; if (day == 19 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[693]] == _0x245E2[735] && balonMov3[_0x245E2[196]] <= 450) {
            balonMov3[_0x245E2[196]] += 1.5 * 2
        } else {
            if (day == 19 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[693]] == _0x245E2[735] && balonMov3[_0x245E2[196]] > 450) {
                this[_0x245E2[693]] = _0x245E2[335];
                balonMov3[_0x245E2[335]]()
            }
        }; if (day == 19 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[694]] == _0x245E2[735] && balonMov4[_0x245E2[196]] <= 450) {
            balonMov4[_0x245E2[196]] += 1.5 * 2
        } else {
            if (day == 19 && cerc3[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[694]] == _0x245E2[735] && balonMov4[_0x245E2[196]] > 450) {
                this[_0x245E2[694]] = _0x245E2[335];
                balonMov4[_0x245E2[335]]()
            }
        }; if (day == 19 && cerc5[_0x245E2[155]][_0x245E2[199]] == 1 && target1[_0x245E2[194]] == true) {
            target1[_0x245E2[335]]()
        };
        if (day == 21 && cerc3[_0x245E2[155]][_0x245E2[199]] == 1 && this[_0x245E2[215]] == _0x245E2[560]) {
            this[_0x245E2[215]] = _0x245E2[735];
            balonMov2[_0x245E2[121]][_0x245E2[122]](_0x245E2[688], 7, false);
            if (this[_0x245E2[736]]) {
                this[_0x245E2[736]][_0x245E2[562]]()
            };
            if (this[_0x245E2[737]]) {
                this[_0x245E2[737]][_0x245E2[562]]()
            }
        };
        if (day == 21 && cerc2[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] <= 450) {
            balonMov2[_0x245E2[196]] += 1.5 * 2
        } else {
            if (day == 21 && cerc2[_0x245E2[155]][_0x245E2[199]] == 0 && this[_0x245E2[215]] == _0x245E2[735] && balonMov2[_0x245E2[196]] > 450) {
                this[_0x245E2[215]] = _0x245E2[335];
                balonMov2[_0x245E2[335]]()
            }
        }
    }

    function _0x27933(_0x24639, _0x24690) {
        y1Barrels = _0x24639 = 400;
        y2Barrels = _0x24690 = 200;
        this[_0x245E2[738]]()
    }

    function _0x2798A() {
        tweenUp = game[_0x245E2[48]][_0x245E2[159]](_0x245E2[739]);
        tweenUp = game[_0x245E2[48]][_0x245E2[159]](this)[_0x245E2[158]]({
            y: y1Barrels
        }, 5000, Phaser[_0x245E2[496]][_0x245E2[740]][_0x245E2[494]], true);
        tweenUp[_0x245E2[161]][_0x245E2[48]](this[_0x245E2[741]], this)
    }

    function _0x279E1() {
        tweenDown = game[_0x245E2[48]][_0x245E2[159]](_0x245E2[739]);
        tweenDown = game[_0x245E2[48]][_0x245E2[159]](this)[_0x245E2[158]]({
            y: y2Barrels
        }, 6000, Phaser[_0x245E2[496]][_0x245E2[740]][_0x245E2[494]], true);
        tweenDown[_0x245E2[161]][_0x245E2[48]](this[_0x245E2[738]], this)
    }

    function _0x27A38(_0x24639) {
        _0x24639[_0x245E2[742]](_0x24639)
    }

    function _0x27A8F(_0x24639) {
        if (_0x24639[_0x245E2[743]]) {
            _0x24639[_0x245E2[743]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[744]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[744]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 150))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[744]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[746]], _0x24639);
        _0x24639[_0x245E2[744]][_0x245E2[46]]()
    }

    function _0x27AE6(_0x24639) {
        _0x24639[_0x245E2[744]][_0x245E2[562]]();
        _0x24639[_0x245E2[743]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[743]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 150))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[743]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[742]], _0x24639);
        _0x24639[_0x245E2[743]][_0x245E2[46]]()
    }

    function _0x27B3D(_0x24639) {
        this[_0x245E2[747]](_0x24639)
    }

    function _0x27B94(_0x24639) {
        if (_0x24639[_0x245E2[748]]) {
            _0x24639[_0x245E2[748]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[749]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[749]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 20))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[749]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[750]], _0x24639);
        _0x24639[_0x245E2[749]][_0x245E2[46]]()
    }

    function _0x27BEB(_0x24639) {
        _0x24639[_0x245E2[749]][_0x245E2[562]]();
        _0x24639[_0x245E2[748]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[748]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 20))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[748]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[747]], _0x24639);
        _0x24639[_0x245E2[748]][_0x245E2[46]]()
    }

    function _0x27C42(_0x24639) {
        _0x24639[_0x245E2[751]](_0x24639)
    }

    function _0x27C99(_0x24639) {
        if (_0x24639[_0x245E2[737]]) {
            _0x24639[_0x245E2[737]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[736]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[736]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 20))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[736]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[752]], _0x24639);
        _0x24639[_0x245E2[736]][_0x245E2[46]]()
    }

    function _0x27CF0(_0x24639) {
        _0x24639[_0x245E2[736]][_0x245E2[562]]();
        _0x24639[_0x245E2[737]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[737]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 20))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[737]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[751]], _0x24639);
        _0x24639[_0x245E2[737]][_0x245E2[46]]()
    }

    function _0x27D47(_0x24639) {
        _0x24639[_0x245E2[753]](_0x24639)
    }

    function _0x27D9E(_0x24639) {
        if (_0x24639[_0x245E2[754]]) {
            _0x24639[_0x245E2[754]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[755]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[755]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 200))
        }, 2000, Phaser[_0x245E2[496]][_0x245E2[756]][_0x245E2[494]]);
        _0x24639[_0x245E2[755]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[757]], _0x24639);
        _0x24639[_0x245E2[755]][_0x245E2[46]]()
    }

    function _0x27DF5(_0x24639) {
        _0x24639[_0x245E2[755]][_0x245E2[562]]();
        _0x24639[_0x245E2[754]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[754]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 200))
        }, 2000, Phaser[_0x245E2[496]][_0x245E2[756]][_0x245E2[494]]);
        _0x24639[_0x245E2[754]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[753]], _0x24639);
        _0x24639[_0x245E2[754]][_0x245E2[46]]()
    }

    function _0x27E4C(_0x24639) {
        this[_0x245E2[758]](_0x24639)
    }

    function _0x27EA3(_0x24639) {
        if (_0x24639[_0x245E2[759]]) {
            _0x24639[_0x245E2[759]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[760]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[760]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 10))
        }, 1000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[760]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[761]], _0x24639);
        _0x24639[_0x245E2[760]][_0x245E2[46]]()
    }

    function _0x27EFA(_0x24639) {
        _0x24639[_0x245E2[760]][_0x245E2[562]]();
        _0x24639[_0x245E2[759]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[759]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 10))
        }, 1000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[759]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[758]], _0x24639);
        _0x24639[_0x245E2[759]][_0x245E2[46]]()
    }

    function _0x27F51(_0x24639) {
        _0x24639[_0x245E2[762]](_0x24639);
        _0x24639[_0x245E2[763]] = true
    }

    function _0x27FA8(_0x24639) {
        if (_0x24639[_0x245E2[764]]) {
            _0x24639[_0x245E2[764]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[765]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[765]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 30))
        }, 1000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[765]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[766]], _0x24639);
        _0x24639[_0x245E2[765]][_0x245E2[46]]()
    }

    function _0x27FFF(_0x24639) {
        _0x24639[_0x245E2[765]][_0x245E2[562]]();
        _0x24639[_0x245E2[764]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[764]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 30))
        }, 1000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        if (_0x24639[_0x245E2[763]] == true) {
            _0x24639[_0x245E2[67]] = 0;
            _0x24639[_0x245E2[535]][_0x245E2[534]](1, 1, 3000, 3000);
            _0x24639[_0x245E2[763]] = false
        } else {
            _0x24639[_0x245E2[67]] = 1;
            _0x24639[_0x245E2[535]][_0x245E2[534]](45, 30, 10, 10);
            _0x24639[_0x245E2[763]] = true
        };
        _0x24639[_0x245E2[764]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[762]], _0x24639);
        _0x24639[_0x245E2[764]][_0x245E2[46]]()
    }

    function _0x28056() {}

    function _0x280AD() {}

    function _0x28104() {}

    function _0x2815B(_0x245E2) {}

    function _0x281B2(_0x24639) {
        this[_0x245E2[768]](_0x24639)
    }

    function _0x28209(_0x24639) {
        if (_0x24639[_0x245E2[769]]) {
            _0x24639[_0x245E2[769]][_0x245E2[562]]()
        };
        _0x24639[_0x245E2[770]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[770]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] + 20))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[770]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[771]], _0x24639);
        _0x24639[_0x245E2[770]][_0x245E2[46]]()
    }

    function _0x28260(_0x24639) {
        _0x24639[_0x245E2[770]][_0x245E2[562]]();
        _0x24639[_0x245E2[769]] = game[_0x245E2[48]][_0x245E2[159]](_0x24639);
        _0x24639[_0x245E2[769]][_0x245E2[158]]({
            y: Math[_0x245E2[444]]((_0x24639[_0x245E2[196]] - 20))
        }, 3000, Phaser[_0x245E2[496]][_0x245E2[745]][_0x245E2[494]]);
        _0x24639[_0x245E2[769]][_0x245E2[161]][_0x245E2[48]](_0x24639[_0x245E2[768]], _0x24639);
        _0x24639[_0x245E2[769]][_0x245E2[46]]()
    }

    function _0x282B7(_0x24639, _0x246E7) {
        var _0x24690;
        _0x246E7[_0x245E2[324]][_0x245E2[170]][_0x245E2[183]][_0x245E2[775]][_0x245E2[174]](function(_0x24795, _0x2473E) {
            if (_0x24795[_0x245E2[155]][_0x245E2[199]] == 1 && _0x24639[_0x245E2[155]][_0x245E2[198]] == _0x2473E + 1) {
                _0x24690 = _0x24639;
                _0x24639[_0x245E2[155]][_0x245E2[199]] = 0;
                _0x24795[_0x245E2[155]][_0x245E2[602]] = _0x245E2[772];
                _0x24639[_0x245E2[67]] = 0.2;
                circleUp = (_0x24639[_0x245E2[620]] + _0x245E2[773])[_0x245E2[326]]();
                if (_0x24795[_0x245E2[155]][_0x245E2[774]]) {
                    if (_0x24795[_0x245E2[155]][_0x245E2[774]] == 1) {
                        tweenFill[_0x245E2[562]]();
                        game_overVar = true;
                        player[_0x245E2[598]]()
                    }
                }
            };
            if (_0x24795[_0x245E2[155]][_0x245E2[199]] == 0 && _0x24639[_0x245E2[155]][_0x245E2[198]] == _0x2473E + 1) {
                _0x246E7[_0x245E2[324]][_0x245E2[170]][_0x245E2[183]][_0x245E2[775]][_0x2473E + 1][_0x245E2[155]][_0x245E2[199]] = 1
            }
        });
        arrCirclesUp[_0x245E2[174]](function(_0x24690, _0x24639) {
            if (circleUp == _0x24690[_0x245E2[155]][_0x245E2[620]]) {
                _0x24690[_0x245E2[67]] = 0.2
            }
        })
    }

    function _0x2830E(_0x24639) {
        if (_0x24639[_0x245E2[324]]) {
            _0x24639[_0x245E2[324]][_0x245E2[170]][_0x245E2[183]][_0x245E2[775]][_0x245E2[174]](function(_0x24690, _0x24639) {
                _0x24690[_0x245E2[155]][_0x245E2[602]] = _0x245E2[603];
                if (_0x24690[_0x245E2[155]][_0x245E2[620]] == _0x245E2[638]) {
                    _0x24690[_0x245E2[155]][_0x245E2[199]] = 1
                } else {
                    _0x24690[_0x245E2[155]][_0x245E2[199]] = 0
                }
            })
        } else {
            if (_0x24639) {
                _0x24639[_0x245E2[170]][_0x245E2[183]][_0x245E2[775]][_0x245E2[174]](function(_0x24690, _0x24639) {
                    _0x24690[_0x245E2[155]][_0x245E2[602]] = _0x245E2[603];
                    if (_0x24690[_0x245E2[155]][_0x245E2[620]] == _0x245E2[638]) {
                        _0x24690[_0x245E2[155]][_0x245E2[199]] = 1
                    } else {
                        _0x24690[_0x245E2[155]][_0x245E2[199]] = 0
                    }
                })
            }
        }; if (_0x24639[_0x245E2[170]]) {
            _0x24639[_0x245E2[170]][_0x245E2[183]][_0x245E2[775]][_0x245E2[174]](function(_0x24690, _0x24639) {
                if (_0x24690[_0x245E2[155]][_0x245E2[620]] == _0x245E2[638]) {
                    _0x24690[_0x245E2[155]][_0x245E2[199]] = 1
                } else {
                    _0x24690[_0x245E2[155]][_0x245E2[199]] = 0
                }
            })
        }
    }

    function _0x28365(_0x24690, _0x246E7, _0x24639, _0x2473E) {
        _0x245E2[13];
        this[_0x245E2[324]] = _0x24690;
        RocketWW2[_0x245E2[512]][_0x245E2[14]](this, _0x24690, _0x246E7, _0x24639, _0x2473E);
        this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[520]](this);
        this[_0x245E2[535]][_0x245E2[635]] = false;
        this[_0x245E2[535]][_0x245E2[697]] = true;
        this[_0x245E2[535]][_0x245E2[68]] = 2000;
        this[_0x245E2[67]] = 1
    }

    function _0x283BC() {}

    function _0x28413(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        RocketWW2[_0x245E2[512]][_0x245E2[14]](this, _0x24639, _0x24690, _0x246E7);
        this[_0x245E2[324]] = _0x24639;
        this[_0x245E2[155]] = _0x246E7;
        this[_0x245E2[324]][_0x245E2[23]][_0x245E2[522]][_0x245E2[521]][_0x245E2[520]](this);
        this[_0x245E2[535]][_0x245E2[697]] = true;
        this[_0x245E2[296]][_0x245E2[295]](0.5, 0.5)
    }

    function _0x2846A() {}

    function _0x284C1() {}

    function _0x28518(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        RocketWW2[_0x245E2[512]][_0x245E2[14]](this, _0x24639, _0x24690, _0x246E7);
        this[_0x245E2[324]] = _0x24639;
        updateScore = 0;
        textScore = this[_0x245E2[324]][_0x245E2[48]][_0x245E2[40]](300, 10, updateScore, {
            font: _0x245E2[776],
            fill: _0x245E2[491]
        });
        textScore[_0x245E2[195]] = 350;
        scoreCount = 0
    }

    function _0x2856F() {}

    function _0x285C6(_0x24639) {
        updateScore += _0x24639;
        textScore[_0x245E2[350]](updateScore)
    }

    function _0x2861D(_0x24639, _0x24690, _0x246E7) {
        _0x245E2[13];
        this[_0x245E2[324]] = _0x24639;
        RocketWW2[_0x245E2[512]][_0x245E2[14]](this, _0x24639, _0x24690, _0x246E7);
        typeDisc = _0x245E2[563]
    }

    function _0x28674() {
        _0x245E2[13];
        if (!player[_0x245E2[535]]) {
            return
        };
        emPart[_0x245E2[778]] = player[_0x245E2[195]] - 40 * Math[_0x245E2[532]](player[_0x245E2[531]]);
        emPart[_0x245E2[779]] = player[_0x245E2[196]] - 40 * Math[_0x245E2[533]](player[_0x245E2[531]]);
        if (finishVar == false) {
            emPart[_0x245E2[780]](0, -player[_0x245E2[529]] * 30);
            emPart[_0x245E2[781]](0, -player[_0x245E2[529]] * 30)
        }
    }

    function _0x286CB(_0x24690, _0x24639) {
        emPart = this[_0x245E2[23]][_0x245E2[48]][_0x245E2[782]]();
        emPart[_0x245E2[783]](_0x245E2[128], _0x24690);
        emPart[_0x245E2[784]](0, 0);
        emPart[_0x245E2[786]](0.9, 0, 0.9, 0, 3000, Phaser[_0x245E2[496]][_0x245E2[785]][_0x245E2[494]]);
        emPart[_0x245E2[46]](false, 400, _0x24639)
    }

    function _0x28722() {
        thisBoom = game[_0x245E2[48]][_0x245E2[782]](player[_0x245E2[195]], player[_0x245E2[196]], 30);
        thisBoom[_0x245E2[783]](_0x245E2[128], _0x245E2[787]);
        thisBoom[_0x245E2[788]][_0x245E2[295]](-300, 30);
        thisBoom[_0x245E2[789]][_0x245E2[295]](300, -100);
        thisBoom[_0x245E2[790]] = 0.5;
        thisBoom[_0x245E2[791]] = 1.3;
        thisBoom[_0x245E2[623]] = 300;
        thisBoom[_0x245E2[792]](4000, 4000, 10, -1);
        game[_0x245E2[50]][_0x245E2[49]][_0x245E2[48]](2000, this[_0x245E2[793]], this)
    }

    function _0x28779() {
        emPart[_0x245E2[627]]()
    }

    function _0x287D0() {
        thisBoom[_0x245E2[335]]()
    }
    getHost = _0x247EC;
    goHome = _0x24A4D;
    goHome2 = _0x24AA4;
    recordEvent = _0x24AFB;
    showMidroll = _0x2521E;
    dataShowWindowLastMap = _0x25DAC;
    dataShowWindowLastMap2 = _0x25E03;
    onBannerOpen = _0x26064;
    onBannerClose = _0x260BB;
    restartLvl = _0x26DA5;
    showTexts = _0x26EAA;
    (_0x24639)(_0x245E2[0], 1, _0x245E2[1]);
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[12]] = _0x24690;
    RocketWW2[_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[12]];
    RocketWW2[_0x245E2[12]][_0x245E2[16]][_0x245E2[19]] = _0x246E7;
    RocketWW2[_0x245E2[12]][_0x245E2[16]][_0x245E2[32]] = _0x2473E;
    RocketWW2[_0x245E2[12]][_0x245E2[16]][_0x245E2[17]] = _0x24795;
    RocketWW2 = RocketWW2 || {};
    timerPreload = 0;
    this[_0x245E2[53]] = {};
    this[_0x245E2[53]][_0x245E2[54]] = _0x245E2[55];
    this[_0x245E2[53]][_0x245E2[56]] = _0x245E2[57];
    content = _0x245E2[58];
    RocketWW2[_0x245E2[45]] = _0x24843;
    RocketWW2[_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[45]];
    RocketWW2[_0x245E2[45]][_0x245E2[16]][_0x245E2[19]] = _0x2489A;
    RocketWW2[_0x245E2[45]][_0x245E2[16]][_0x245E2[32]] = _0x248F1;
    RocketWW2[_0x245E2[45]][_0x245E2[16]][_0x245E2[17]] = _0x24948;
    RocketWW2[_0x245E2[45]][_0x245E2[16]][_0x245E2[101]] = _0x2499F;
    RocketWW2[_0x245E2[45]][_0x245E2[16]][_0x245E2[102]] = _0x249F6;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[100]] = _0x24B52;
    RocketWW2[_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[100]];
    justOnceVar = true;
    RocketWW2[_0x245E2[100]][_0x245E2[16]][_0x245E2[19]] = _0x24BA9;
    RocketWW2[_0x245E2[100]][_0x245E2[16]][_0x245E2[17]] = _0x24C00;
    RocketWW2[_0x245E2[100]][_0x245E2[16]][_0x245E2[123]] = _0x24C57;
    RocketWW2[_0x245E2[100]][_0x245E2[16]][_0x245E2[133]] = _0x24CAE;
    RocketWW2 = RocketWW2 || {};
    elemscorBool = false;
    _this = this;
    musicBtnActive = 0;
    RocketWW2[_0x245E2[136]] = _0x24D05;
    RocketWW2[_0x245E2[136]][_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[136]];
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[19]] = _0x24D5C;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[101]] = _0x24DB3;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[153]] = _0x24E0A;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[17]] = _0x24E61;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[189]] = _0x24EB8;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[133]] = _0x24F0F;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[193]] = _0x24F66;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[262]] = _0x24FBD;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[255]] = _0x25014;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[256]] = _0x2506B;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[257]] = _0x250C2;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[259]] = _0x25119;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[260]] = _0x25170;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[261]] = _0x251C7;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[150]] = _0x25275;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[283]] = _0x252CC;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[281]] = _0x25323;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[286]] = _0x2537A;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[190]] = _0x253D1;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[191]] = _0x25428;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[186]] = _0x2547F;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[160]] = _0x254D6;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[144]] = _0x2552D;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[145]] = _0x25584;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[311]] = _0x255DB;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[165]] = _0x25632;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[164]] = _0x25689;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[318]] = _0x256E0;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[322]] = _0x25737;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[301]] = _0x2578E;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[338]] = _0x257E5;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[340]] = _0x2583C;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[343]] = _0x25893;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[345]] = _0x258EA;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[162]] = _0x25941;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[282]] = _0x25998;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[351]] = _0x259EF;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[280]] = _0x25A46;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[252]] = _0x25A9D;
    RocketWW2[_0x245E2[136]][_0x245E2[16]][_0x245E2[166]] = _0x25AF4;
    RocketWW2 = RocketWW2 || {};
    localStorageRocketName = _0x245E2[358];
    stars = [];
    RocketWW2[_0x245E2[135]] = _0x25B4B;
    RocketWW2[_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[135]];
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[19]] = _0x25BA2;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[32]] = _0x25BF9;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[17]] = _0x25C50;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[418]] = _0x25CA7;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[394]] = _0x25CFE;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[422]] = _0x25D55;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[415]] = _0x25E5A;
    RocketWW2[_0x245E2[135]][_0x245E2[16]][_0x245E2[327]] = _0x25EB1;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[360]] = _0x25F08;
    window[_0x245E2[431]] = new Object();
    window[_0x245E2[431]][_0x245E2[432]] = _0x26064;
    window[_0x245E2[431]][_0x245E2[433]] = _0x260BB;
    RocketWW2[_0x245E2[360]][_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[360]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[360]];
    RocketWW2[_0x245E2[360]][_0x245E2[16]][_0x245E2[361]] = _0x25F5F;
    RocketWW2[_0x245E2[360]][_0x245E2[16]][_0x245E2[441]] = _0x25FB6;
    RocketWW2[_0x245E2[360]][_0x245E2[16]][_0x245E2[278]] = _0x2600D;
    RocketWW2[_0x245E2[360]][_0x245E2[16]][_0x245E2[446]] = _0x26112;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[113]] = _0x26169;
    RocketWW2[_0x245E2[113]][_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[113]];
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[148]] = _0x261C0;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[352]] = _0x26217;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[149]] = _0x2626E;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[286]] = _0x262C5;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[454]] = _0x2631C;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[458]] = _0x26373;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[190]] = _0x263CA;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[281]] = _0x26421;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[461]] = _0x26478;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[416]] = _0x264CF;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[332]] = _0x26526;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[334]] = _0x2657D;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[468]] = _0x265D4;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[348]] = _0x2662B;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[346]] = _0x26682;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[124]] = _0x266D9;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[426]] = _0x26730;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[428]] = _0x26787;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[283]] = _0x267DE;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[492]] = _0x26835;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[493]] = _0x2688C;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[427]] = _0x268E3;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[333]] = _0x2693A;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[349]] = _0x26991;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[347]] = _0x269E8;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[165]] = _0x26A3F;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[417]] = _0x26A96;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[497]] = _0x26AED;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[451]] = _0x26B44;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[462]] = _0x26B9B;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[134]] = _0x26BF2;
    RocketWW2[_0x245E2[113]][_0x245E2[16]][_0x245E2[125]] = _0x26C49;
    RocketWW2 = RocketWW2 || {};
    _this = this;
    pause = false;
    RocketWW2[_0x245E2[269]] = _0x26CA0;
    RocketWW2[_0x245E2[269]][_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[15]][_0x245E2[16]]);
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[269]];
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[500]] = _0x26CF7;
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[251]] = _0x26D4E;
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[504]] = _0x26DFC;
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[272]] = _0x26E53;
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[511]] = _0x26F01;
    RocketWW2[_0x245E2[269]][_0x245E2[16]][_0x245E2[505]] = _0x26F58;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[512]] = _0x26FAF;
    RocketWW2[_0x245E2[512]][_0x245E2[16]] = Object[_0x245E2[17]](Phaser[_0x245E2[514]][_0x245E2[16]]);
    RocketWW2[_0x245E2[512]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[512]];
    RocketWW2 = RocketWW2 || {};
    _this = this;
    auxRot = 0;
    RocketWW2[_0x245E2[139]] = _0x27006;
    RocketWW2[_0x245E2[139]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[512]][_0x245E2[16]]);
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[139]];
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[528]] = _0x2705D;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[101]] = _0x270B4;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[584]] = _0x2710B;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[589]] = _0x27162;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[523]] = _0x271B9;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[336]] = _0x27210;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[588]] = _0x27267;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[598]] = _0x272BE;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[344]] = _0x27315;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[599]] = _0x2736C;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[555]] = _0x273C3;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[540]] = _0x2741A;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[606]] = _0x27471;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[610]] = _0x274C8;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[613]] = _0x2751F;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[569]] = _0x27576;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[545]] = _0x275CD;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[618]] = _0x27624;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[548]] = _0x2767B;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[619]] = _0x276D2;
    RocketWW2[_0x245E2[139]][_0x245E2[16]][_0x245E2[443]] = _0x27729;
    RocketWW2 = RocketWW2 || {};
    _this = this;
    RocketWW2[_0x245E2[420]] = _0x27780;
    RocketWW2[_0x245E2[420]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[420]][_0x245E2[16]]);
    RocketWW2[_0x245E2[420]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[420]];
    RocketWW2[_0x245E2[420]][_0x245E2[16]][_0x245E2[421]] = _0x277D7;
    RocketWW2[_0x245E2[420]][_0x245E2[16]][_0x245E2[632]] = _0x2782E;
    RocketWW2 = RocketWW2 || {};
    wait = true;
    arrCirclesUp = [];
    RocketWW2[_0x245E2[138]] = _0x27885;
    RocketWW2[_0x245E2[138]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[512]][_0x245E2[16]]);
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[138]];
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[101]] = _0x278DC;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[657]] = _0x27933;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[738]] = _0x2798A;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[741]] = _0x279E1;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[659]] = _0x27A38;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[742]] = _0x27A8F;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[746]] = _0x27AE6;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[689]] = _0x27B3D;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[747]] = _0x27B94;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[750]] = _0x27BEB;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[691]] = _0x27C42;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[751]] = _0x27C99;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[752]] = _0x27CF0;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[662]] = _0x27D47;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[753]] = _0x27D9E;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[757]] = _0x27DF5;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[665]] = _0x27E4C;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[758]] = _0x27EA3;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[761]] = _0x27EFA;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[669]] = _0x27F51;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[762]] = _0x27FA8;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[766]] = _0x27FFF;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[671]] = _0x28056;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[674]] = _0x280AD;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[767]] = _0x28104;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[734]] = _0x2815B;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[684]] = _0x281B2;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[768]] = _0x28209;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[771]] = _0x28260;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[608]] = _0x282B7;
    RocketWW2[_0x245E2[138]][_0x245E2[16]][_0x245E2[337]] = _0x2830E;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[140]] = _0x28365;
    RocketWW2[_0x245E2[140]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[512]][_0x245E2[16]]);
    RocketWW2[_0x245E2[140]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[140]];
    RocketWW2[_0x245E2[140]][_0x245E2[16]][_0x245E2[101]] = _0x283BC;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[142]] = _0x28413;
    RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[19]] = _0x2846A;
    RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[17]] = _0x284C1;
    RocketWW2[_0x245E2[142]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[512]][_0x245E2[16]]);
    RocketWW2[_0x245E2[142]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[142]];
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[141]] = _0x28518;
    RocketWW2[_0x245E2[141]][_0x245E2[16]][_0x245E2[17]] = _0x2856F;
    RocketWW2[_0x245E2[141]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[512]][_0x245E2[16]]);
    RocketWW2[_0x245E2[141]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[141]];
    RocketWW2[_0x245E2[141]][_0x245E2[16]][_0x245E2[777]] = _0x285C6;
    RocketWW2 = RocketWW2 || {};
    RocketWW2[_0x245E2[143]] = _0x2861D;
    RocketWW2[_0x245E2[143]][_0x245E2[16]] = Object[_0x245E2[17]](RocketWW2[_0x245E2[512]][_0x245E2[16]]);
    RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[18]] = RocketWW2[_0x245E2[143]];
    RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[101]] = _0x28674;
    RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[564]] = _0x286CB;
    RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[605]] = _0x28722;
    RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[336]] = _0x28779;
    RocketWW2[_0x245E2[143]][_0x245E2[16]][_0x245E2[793]] = _0x287D0;
    RocketWW2 = RocketWW2 || {};
    game = new Phaser[_0x245E2[796]](800, 600, Phaser[_0x245E2[794]], _0x245E2[795], null, false, true);
    game[_0x245E2[47]][_0x245E2[48]](_0x245E2[12], new RocketWW2[_0x245E2[12]]());
    game[_0x245E2[47]][_0x245E2[48]](_0x245E2[45], new RocketWW2[_0x245E2[45]]());
    game[_0x245E2[47]][_0x245E2[48]](_0x245E2[100], new RocketWW2[_0x245E2[100]]());
    game[_0x245E2[47]][_0x245E2[48]](_0x245E2[136], new RocketWW2[_0x245E2[136]]());
    game[_0x245E2[47]][_0x245E2[48]](_0x245E2[135], new RocketWW2[_0x245E2[135]]());
    game[_0x245E2[47]][_0x245E2[46]](_0x245E2[12], true, false, _0x245E2[797])
})()