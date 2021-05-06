export function limit(max: number, min: number, value: number) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
}

/**
 * 根据渲染 size 项算出每项位置边界，开头默认 0
 * location.length = sizes.length + 1
 * 如：[0, 10, 20]
 */
export function getLocations(sizes: number[]) {
    const result = [0];
    sizes.forEach((item) => {
        const current = item + result[result.length - 1];
        result.push(current);
    });
    return result;
}

/**
 * 计算在视窗中开始、结束项下标
 */
export function calcFirstLastIndex(props: {
    offset: number;
    locations: number[];
    viewSize: number;
    sizes: number[];
}) {
    const { offset, locations, viewSize, sizes } = props;
    const positiveOffset = Math.abs(offset);

    // 视窗中开始项、结束项的下标
    const firstIndex = getTargetIdx(locations, positiveOffset) - 1;
    const lastIndex = Math.min(getTargetIdx(locations, positiveOffset + viewSize), sizes.length - 1);

    return [firstIndex, lastIndex];
}

/**
 * 获取 target 在数组中合适的位置
 * @param numArray 递增的数组
 * @param target
 */
 function getTargetIdx(numArray: number[], target: number) {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > target) {
            return i;
        }
    }

    return numArray.length;
}
