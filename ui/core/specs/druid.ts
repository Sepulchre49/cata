import { IconSize } from '../class';
import { Druid } from '../classes';
import { Spec as SpecProto } from '../proto/common';
import { getSpecSiteUrl } from '../proto_utils/utils';
import { Spec } from '../spec';

export class BalanceDruid extends Spec {
	static protoID = SpecProto.SpecBalanceDruid;
	static class = Druid;
	static friendlyName = 'Balance';
	static simLink = getSpecSiteUrl('druid', 'balance');

	static isTankSpec = false;
	static isHealingSpec = false;
	static isRangedDpsSpec = true;
	static isMeleeDpsSpec = false;

	static canDualWield = false;

	readonly protoID = BalanceDruid.protoID;
	readonly class = BalanceDruid.class;
	readonly friendlyName = BalanceDruid.friendlyName;
	readonly simLink = BalanceDruid.simLink;

	readonly isTankSpec = BalanceDruid.isTankSpec;
	readonly isHealingSpec = BalanceDruid.isHealingSpec;
	readonly isRangedDpsSpec = BalanceDruid.isRangedDpsSpec;
	readonly isMeleeDpsSpec = BalanceDruid.isMeleeDpsSpec;

	readonly canDualWield = BalanceDruid.canDualWield;

	static getIcon = (size: IconSize): string => {
		return `https://wow.zamimg.com/images/wow/icons/${size}/spell_nature_starfall.jpg`;
	}

	getIcon = (size: IconSize): string => {
		return BalanceDruid.getIcon(size)
	}
}

export class FeralDruid extends Spec {
	static protoID = SpecProto.SpecFeralDruid;
	static class = Druid;
	static friendlyName = 'Feral';
	static simLink = getSpecSiteUrl('druid', 'feral');

	static isTankSpec = true;
	static isHealingSpec = false;
	static isRangedDpsSpec = false;
	static isMeleeDpsSpec = true;

	static canDualWield = false;

	readonly protoID = FeralDruid.protoID;
	readonly class = FeralDruid.class;
	readonly friendlyName = FeralDruid.friendlyName;
	readonly simLink = FeralDruid.simLink;

	readonly isTankSpec = FeralDruid.isTankSpec;
	readonly isHealingSpec = FeralDruid.isHealingSpec;
	readonly isRangedDpsSpec = FeralDruid.isRangedDpsSpec;
	readonly isMeleeDpsSpec = FeralDruid.isMeleeDpsSpec;

	readonly canDualWield = FeralDruid.canDualWield;

	static getIcon = (size: IconSize): string => {
		return `https://wow.zamimg.com/images/wow/icons/${size}/ability_racial_bearform.jpg`;
	}

	getIcon = (size: IconSize): string => {
		return FeralDruid.getIcon(size)
	}
}

export class RestorationDruid extends Spec {
	static protoID = SpecProto.SpecRestorationDruid;
	static class = Druid;
	static friendlyName = 'Restoration';
	static simLink = getSpecSiteUrl('druid', 'Restoration');

	static isTankSpec = false;
	static isHealingSpec = true;
	static isRangedDpsSpec = false;
	static isMeleeDpsSpec = false;

	static canDualWield = false;

	readonly protoID = RestorationDruid.protoID;
	readonly class = RestorationDruid.class;
	readonly friendlyName = RestorationDruid.friendlyName;
	readonly simLink = RestorationDruid.simLink;

	readonly isTankSpec = RestorationDruid.isTankSpec;
	readonly isHealingSpec = RestorationDruid.isHealingSpec;
	readonly isRangedDpsSpec = RestorationDruid.isRangedDpsSpec;
	readonly isMeleeDpsSpec = RestorationDruid.isMeleeDpsSpec;

	readonly canDualWield = RestorationDruid.canDualWield;

	static getIcon = (size: IconSize): string => {
		return `https://wow.zamimg.com/images/wow/icons/${size}/spell_nature_healingtouch.jpg`;
	}

	getIcon = (size: IconSize): string => {
		return RestorationDruid.getIcon(size)
	}
}
