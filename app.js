document.addEventListener('DOMContentLoaded', function() {
    const _0xabc1 = ['checked', 'disabled', 'getElementById', 'addEventListener', 'submit', 'querySelectorAll', 'map', 'value', 'reduce', 'preventDefault', 'todayCompleted', 'medalCalculator', 'completed-times', 'useExtraTimes', 'useTargetDate', 'extraTimes', 'targetDate', 'checked', 'map', 'reduce', 'checked', 'checked', 'map', 'value'];
    (function(_0x23ab1e, _0x1db034) {
        const _0x375adf = function(_0x53223e) {
            while (--_0x53223e) {
                _0x23ab1e['push'](_0x23ab1e['shift']());
            }
        };
        _0x375adf(++_0x1db034);
    }(_0xabc1, 0x7d));
    const _0x3b1f = function(_0x1db034, _0x23ab1e) {
        _0x1db034 = _0x1db034 - 0x0;
        let _0x375adf = _0xabc1[_0x1db034];
        return _0x375adf;
    };

    const _0x37e315 = document[_0x3b1f('0x0')](_0x3b1f('0x1'));
    const _0x47fe05 = document[_0x3b1f('0x0')](_0x3b1f('0x2'));
    const _0x1258b1 = document[_0x3b1f('0x0')](_0x3b1f('0x3'));
    const _0x57530b = document[_0x3b1f('0x0')](_0x3b1f('0x4'));
    const _0x2c80d2 = document[_0x3b1f('0x0')](_0x3b1f('0x5'));

    _0x37e315[_0x3b1f('0x6')]('change', function() {
        _0x47fe05[_0x3b1f('0x7')] = !this[_0x3b1f('0x8')];
        if (this[_0x3b1f('0x8')]) {
            _0x1258b1[_0x3b1f('0x8')] = false;
            _0x57530b[_0x3b1f('0x7')] = true;
        }
    });

    _0x1258b1[_0x3b1f('0x6')]('change', function() {
        _0x57530b[_0x3b1f('0x7')] = !this[_0x3b1f('0x8')];
        if (this[_0x3b1f('0x8')]) {
            _0x37e315[_0x3b1f('0x8')] = false;
            _0x47fe05[_0x3b1f('0x7')] = true;
        }
    });

    document[_0x3b1f('0x0')](_0x3b1f('0x9'))[_0x3b1f('0x6')](_0x3b1f('0xa'), function(_0x4f2762) {
        _0x4f2762[_0x3b1f('0xb')]();
        const _0x5302e2 = Array['from'](document[_0x3b1f('0xc')]('.' + _0x3b1f('0xd')))[_0x3b1f('0xe')](_0x1e2dd3 => parseInt(_0x1e2dd3[_0x3b1f('0xf')]));
        const _0x45a27e = _0x37e315[_0x3b1f('0x8')];
        const _0x1edbfb = _0x45a27e ? parseInt(_0x47fe05[_0x3b1f('0xf')]) : 0;
        const _0x26c4b9 = _0x1258b1[_0x3b1f('0x8')];
        const _0x512332 = _0x26c4b9 ? new Date(_0x57530b[_0x3b1f('0xf')]) : null;
        const _0x2eb0d1 = _0x2c80d2[_0x3b1f('0x8')];
        const _0x1e2ae0 = new Date();
        const _0x5f4db1 = new Date(_0x1e2ae0);
        _0x5f4db1['setDate'](_0x5f4db1['getDate']() + 0x1);

        const _0x41c1b5 = _0x5302e2[_0x3b1f('0x10')]((_0x569260, _0x12c1d6) => _0x569260 + _0x12c1d6, 0);
        const _0x4b8c92 = 0x2fd - _0x41c1b5;
        const _0x5641de = 0x2;
        const _0x1c7b49 = 0x7;
        const _0x3ebf35 = Math['min'](_0x5641de + _0x1edbfb, _0x1c7b49);

        let _0x4c9156 = `<p>剩餘完成次數：${_0x4b8c92}</p>`;
        if (_0x26c4b9 && _0x512332) {
            const _0x58a158 = _0x2eb0d1 ? _0x5f4db1 : _0x1e2ae0;
            const _0x1f9fe2 = Math['ceil']((_0x512332 - _0x58a158) / (0x3e8 * 0x3c * 0x3c * 0x18));
            const _0x540444 = Math['ceil'](_0x4b8c92 / _0x1f9fe2);
            const _0x268d53 = Math['min'](Math['max'](0x0, _0x540444 - _0x5641de), 0x5);
            const _0x273489 = Math['min'](_0x540444, _0x1c7b49);
            const _0x234d6e = Math['ceil'](_0x4b8c92 / _0x273489);
            const _0x493512 = new Date(_0x58a158['getTime']() + _0x234d6e * 0x18 * 0x3c * 0x3c * 0x3e8);
            const _0x2170f5 = _0x234d6e * _0x268d53 * 0xa;

            _0x4c9156 += `
                <p>距離目標日期天數：${_0x1f9fe2}</p>
                <p>每天需完成次數/任務每天總次數上限：${_0x273489}/${_0x1c7b49}</p>
                <p>每天需要額外付費次數：${_0x268d53}</p>
                <p>實際完成日期：${_0x493512['toLocaleDateString']()}</p>
                <p>預計總金額：${_0x2170f5} 元</p>
            `;
            if (_0x540444 > _0x1c7b49) {
                _0x4c9156 += '<div class="alert alert-warning">警告：每天需要完成的次數超過7次。實際完成日期將晚於目標日期。</div>';
            }
        } else {
            const _0x58a158 = _0x2eb0d1 ? _0x5f4db1 : _0x1e2ae0;
            const _0x5584bc = Math['ceil'](_0x4b8c92 / _0x3ebf35);
            const _0x4029c7 = new Date(_0x58a158['getTime']() + _0x5584bc * 0x18 * 0x3c * 0x3c * 0x3e8);

            _0x4c9156 += `
                <p>預計天數：${_0x5584bc} 天</p>
                <p>預計完成日期：${_0x4029c7['toLocaleDateString']()}</p>
                <p>每天需完成次數/任務每天總次數上限：${_0x3ebf35}/${_0x1c7b49}</p>
            `;
            if (_0x45a27e) {
                const _0x2170f5 = _0x5584bc * _0x1edbfb * 0xa;
                _0x4c9156 += `<p>預計總金額：${_0x2170f5} 元</p>`;
            }
        }

        document['getElementById']('result')['innerHTML'] = _0x4c9156;
    });
});
