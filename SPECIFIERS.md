# Supported Specifiers

## C#
[Documentation](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)

| Format Specifier      |Description| Example | Supported
| ----------- | ----------- | ----------- | ----------- |
|"d"|The day of the month, from 1 through 31. More information: The "d" Custom Format Specifier.|2009-06-01T13:45:30 -> 1 2009-06-15T13:45:30 -> 15|Yes|
|"dd"|The day of the month, from 01 through 31. More information: The "dd" Custom Format Specifier.|2009-06-01T13:45:30 -> 01 2009-06-15T13:45:30 -> 15|Yes|
|"ddd"|The abbreviated name of the day of the week. More information: The "ddd" Custom Format Specifier.|2009-06-15T13:45:30 -> Mon (en-US) 2009-06-15T13:45:30 -> Пн (ru-RU) 2009-06-15T13:45:30 -> lun. (fr-FR) |Yes|
|"dddd"|The full name of the day of the week. More information: The "dddd" Custom Format Specifier.|2009-06-15T13:45:30 -> Monday (en-US) 2009-06-15T13:45:30 -> понедельник (ru-RU) 2009-06-15T13:45:30 -> lundi (fr-FR)|Yes|
|"f"|The tenths of a second in a date and time value. More information: The "f" Custom Format Specifier.|2009-06-15T13:45:30.6170000 -> 6 2009-06-15T13:45:30.05 -> 0|No|
|"ff"|The hundredths of a second in a date and time value. More information: The "ff" Custom Format Specifier.|2009-06-15T13:45:30.6170000 -> 61 2009-06-15T13:45:30.0050000 -> 00|No|
|"fff"|The milliseconds in a date and time value. More information: The "fff" Custom Format Specifier.|6/15/2009 13:45:30.617 -> 617 6/15/2009 13:45:30.0005 -> 000|No|
|"ffff"|The ten thousandths of a second in a date and time value. More information: The "ffff" Custom Format Specifier.|2009-06-15T13:45:30.6175000 -> 6175 2009-06-15T13:45:30.0000500 -> 0000|No|
|"fffff"|The hundred thousandths of a second in a date and time value. More information: The "fffff" Custom Format Specifier.|2009-06-15T13:45:30.6175400 -> 61754 6/15/2009 13:45:30.000005 -> 00000|No|
|"ffffff"|The millionths of a second in a date and time value. More information: The "ffffff" Custom Format Specifier.|2009-06-15T13:45:30.6175420 -> 617542 2009-06-15T13:45:30.0000005 -> 000000|No|
|"fffffff"|The ten millionths of a second in a date and time value. More information: The "fffffff" Custom Format Specifier.|2009-06-15T13:45:30.6175425 -> 6175425 2009-06-15T13:45:30.0001150 -> 0001150|No|
|"F"|If non-zero, the tenths of a second in a date and time value. More information: The "F" Custom Format Specifier.|2009-06-15T13:45:30.6170000 -> 6 2009-06-15T13:45:30.0500000 -> (no output)|No|
|"FF"|If non-zero, the hundredths of a second in a date and time value. More information: The "FF" Custom Format Specifier.|2009-06-15T13:45:30.6170000 -> 61 2009-06-15T13:45:30.0050000 -> (no output)|No|
|"FFF"|If non-zero, the milliseconds in a date and time value. More information: The "FFF" Custom Format Specifier.|2009-06-15T13:45:30.6170000 -> 617 2009-06-15T13:45:30.0005000 -> (no output)|No|
|"FFFF"|If non-zero, the ten thousandths of a second in a date and time value. More information: The "FFFF" Custom Format Specifier.|2009-06-15T13:45:30.5275000 -> 5275 2009-06-15T13:45:30.0000500 -> (no output)|No|
|"FFFFF"|If non-zero, the hundred thousandths of a second in a date and time value. More information: The "FFFFF" Custom Format Specifier.|2009-06-15T13:45:30.6175400 -> 61754 2009-06-15T13:45:30.0000050 -> (no output)|No|
|"FFFFFF"|If non-zero, the millionths of a second in a date and time value. More information: The "FFFFFF" Custom Format Specifier.|2009-06-15T13:45:30.6175420 -> 617542 2009-06-15T13:45:30.0000005 -> (no output)|No|
|"FFFFFFF"|If non-zero, the ten millionths of a second in a date and time value. More information: The "FFFFFFF" Custom Format Specifier.|2009-06-15T13:45:30.6175425 -> 6175425 2009-06-15T13:45:30.0001150 -> 000115|No|
|"g", "gg"|The period or era. More information: The "g" or "gg" Custom Format Specifier.|2009-06-15T13:45:30.6170000 -> A.D.|No|
|"h"|The hour, using a 12-hour clock from 1 to 12. More information: The "h" Custom Format Specifier.|2009-06-15T01:45:30 -> 1 2009-06-15T13:45:30 -> 1|No|
|"hh"|The hour, using a 12-hour clock from 01 to 12. More information: The "hh" Custom Format Specifier.|2009-06-15T01:45:30 -> 01 2009-06-15T13:45:30 -> 01|No|
|"H"|The hour, using a 24-hour clock from 0 to 23. More information: The "H" Custom Format Specifier.|2009-06-15T01:45:30 -> 1 2009-06-15T13:45:30 -> 13|No|
|"HH"|The hour, using a 24-hour clock from 00 to 23. More information: The "HH" Custom Format Specifier.|2009-06-15T01:45:30 -> 01 2009-06-15T13:45:30 -> 13|No|
|"K"|Time zone information. More information: The "K" Custom Format Specifier.|With DateTime values: 2009-06-15T13:45:30, Kind Unspecified -> 2009-06-15T13:45:30, Kind Utc -> Z 2009-06-15T13:45:30, Kind Local -> -07:00 (depends on local computer settings) With DateTimeOffset values: 2009-06-15T01:45:30-07:00 --> -07:00 2009-06-15T08:45:30+00:00 --> +00:00|No|
|"m"|The minute, from 0 through 59. More information: The "m" Custom Format Specifier.|2009-06-15T01:09:30 -> 9 2009-06-15T13:29:30 -> 29|No|
|"mm"|The minute, from 00 through 59. More information: The "mm" Custom Format Specifier.|2009-06-15T01:09:30 -> 09 2009-06-15T01:45:30 -> 45|No|
|"M"|The month, from 1 through 12. More information: The "M" Custom Format Specifier.|2009-06-15T13:45:30 -> 6|Yes|
|"MM"|The month, from 01 through 12. More information: The "MM" Custom Format Specifier.|2009-06-15T13:45:30 -> 06|Yes|
|"MMM"|The abbreviated name of the month. More information: The "MMM" Custom Format Specifier.|2009-06-15T13:45:30 -> Jun (en-US) 2009-06-15T13:45:30 -> juin (fr-FR) 2009-06-15T13:45:30 -> Jun (zu-ZA)|Yes|
|"MMMM"|The full name of the month. More information: The "MMMM" Custom Format Specifier.|2009-06-15T13:45:30 -> June (en-US) 2009-06-15T13:45:30 -> juni (da-DK) 2009-06-15T13:45:30 -> uJuni (zu-ZA)|Yes|
|"s"|The second, from 0 through 59. More information: The "s" Custom Format Specifier.|2009-06-15T13:45:09 -> 9|No|
|"ss"|The second, from 00 through 59. More information: The "ss" Custom Format Specifier.|2009-06-15T13:45:09 -> 09|No|
|"t"|The first character of the AM/PM designator. More information: The "t" Custom Format Specifier.|2009-06-15T13:45:30 -> P (en-US) 2009-06-15T13:45:30 -> 午 (ja-JP)2009-06-15T13:45:30 -> (fr-FR)|No|
|"tt"|The AM/PM designator. More information: The"tt" Custom Format Specifier.|2009-06-15T13:45:30 -> PM (en-US) 2009-06-15T13:45:30 -> 午後 (ja-JP)2009-06-15T13:45:30 -> (fr-FR)|No|
|"y"|The year, from 0 to 99. More information: The "y" Custom Format Specifier.|0001-01-01T00:00:00 -> 1 0900-01-01T00:00:00 -> 0 1900-01-01T00:00:00 -> 0 2009-06-15T13:45:30 -> 9 2019-06-15T13:45:30 -> 19|Yes|
|"yy"|The year, from 00 to 99. More information: The "yy" Custom Format Specifier.|0001-01-01T00:00:00 -> 01 0900-01-01T00:00:00 -> 00 1900-01-01T00:00:00 -> 00 2019-06-15T13:45:30 -> 19|Yes|
|"yyy"|The year, with a minimum of three digits. More information: The "yyy" Custom Format Specifier.|0001-01-01T00:00:00 -> 001 0900-01-01T00:00:00 -> 900 1900-01-01T00:00:00 -> 1900 2009-06-15T13:45:30 -> 2009|No|
|"yyyy"|The year as a four-digit number. More information: The "yyyy" Custom Format Specifier.|0001-01-01T00:00:00 -> 0001 0900-01-01T00:00:00 -> 0900 1900-01-01T00:00:00 -> 1900 2009-06-15T13:45:30 -> 2009|Yes|
|"yyyyy"|The year as a five-digit number. More information: The "yyyyy" Custom Format Specifier.|0001-01-01T00:00:00 -> 00001 2009-06-15T13:45:30 -> 02009|No|
|"z"|Hours offset from UTC, with no leading zeros. More information: The "z" Custom Format Specifier.|2009-06-15T13:45:30-07:00 -> -7|No|
|"zz"|Hours offset from UTC, with a leading zero for a single-digit value. More information: The "zz" Custom Format Specifier.|2009-06-15T13:45:30-07:00 -> -07|No|
|"zzz"|Hours and minutes offset from UTC. More information: The "zzz" Custom Format Specifier.|2009-06-15T13:45:30-07:00 -> -07:00|No|
|":"|The time separator. More information: The ":" Custom Format Specifier.|2009-06-15T13:45:30 -> : (en-US) 2009-06-15T13:45:30 -> . (it-IT) 2009-06-15T13:45:30 -> : (ja-JP)|No|
|"/"|The date separator. More Information: The "/" Custom Format Specifier.|2009-06-15T13:45:30 -> / (en-US) 2009-06-15T13:45:30 -> - (ar-DZ) 2009-06-15T13:45:30 -> . (tr-TR)|No|
|"string" 'string'|Literal string delimiter. More information: Character literals.|2009-06-15T13:45:30 ("arr:" h:m t) -> arr: 1:45 P 2009-06-15T13:45:30 ('arr:' h:m t) -> arr: 1:45 P|No|
|%|Defines the following character as a custom format specifier. More information:Using Single Custom Format Specifiers.|2009-06-15T13:45:30 (%h) -> 1|No|
| \ |The escape character. More information: Character literals and Using the Escape Character.|2009-06-15T13:45:30 (h \h) -> 1 h|No|
|Any other character|The character is copied to the result string unchanged. More information: Character literals.|2009-06-15T01:45:30 (arr hh:mm t) -> arr 01:45 A|No|

## Python 
[Documentation](https://docs.python.org/3/library/datetime.html)
| Format Specifier|Description|Example|Supported
| ----------- | ----------- | ----------- | ----------- | ----------- |
|%a|Weekday as locale’s abbreviated name.|Sun|No|
|%A|Weekday as locale’s full name.|Sunday|No|
|%w|Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.|0|No|
|%d|Day of the month as a zero-padded decimal number.|08|No|
|%-d|Day of the month as a decimal number. (Platform specific)|8|No|
|%b|Month as locale’s abbreviated name.|Sep|No|
|%B|Month as locale’s full name.|September|No|
|%m|Month as a zero-padded decimal number.|09|No|
|%-m|Month as a decimal number. (Platform specific)|9|No|
|%y|Year without century as a zero-padded decimal number.|13|No|
|%Y|Year with century as a decimal number.|2013|No|
|%H|Hour (24-hour clock) as a zero-padded decimal number.|07|No|
|%-H|Hour (24-hour clock) as a decimal number. (Platform specific)|7|No|
|%I|Hour (12-hour clock) as a zero-padded decimal number.|07|No|
|%-I|Hour (12-hour clock) as a decimal number. (Platform specific)|7|No|
|%p|Locale’s equivalent of either AM or PM.|AM|No|
|%M|Minute as a zero-padded decimal number.|06|No|
|%-M|Minute as a decimal number. (Platform specific)|6|No|
|%S|Second as a zero-padded decimal number.|05|No|
|%-S|Second as a decimal number. (Platform specific)|5|No|
|%f|Microsecond as a decimal number, zero-padded on the left.|000000|No|
|%z|UTC offset in the form ±HHMM[SS[.ffffff]] (empty string if the object is naive).|+0000|No|
|%Z|Time zone name (empty string if the object is naive).|UTC|No|
|%j|Day of the year as a zero-padded decimal number.|251|No|
|%-j|Day of the year as a decimal number. (Platform specific)|251|No|
|%U|Week number of the year (Sunday as the first day of the week) as a zero padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0.|36|No|
|%W|Week number of the year (Monday as the first day of the week) as a decimal number. All days in a new year preceding the first Monday are considered to be in week 0.|35|No|
|%c|Locale’s appropriate date and time representation.|Sun Sep 8 07:06:05 2013|No|
|%x|Locale’s appropriate date representation.|09/08/13|No|
|%X|Locale’s appropriate time representation.|07:06:05|No|
|%%|A literal '%' character.|%|No|